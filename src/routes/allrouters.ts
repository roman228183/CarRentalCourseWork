/** @format */

import { Router } from "express";
import TypeCreate from "../controllers/typeController";
import ModelCreate from "../controllers/modelController";
import CountryCreate from "../controllers/countryController";
import CarCreate from "../controllers/carController";
import UserController from "../controllers/userController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/roleMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/createCar", role, CarCreate.create);
router.get("/getallCar", CarCreate.getAll);
router.get("/getoneCar", CarCreate.getOne);
router.delete("/deleteCar", CarCreate.delete);

router.post("/createType", role, TypeCreate.create);
router.get("/getallType", TypeCreate.getAll);
router.get("/getoneType", TypeCreate.getOne);
router.delete("/deleteType", TypeCreate.delete);

router.post("/createModel", role, ModelCreate.create);
router.get("/getallModel", ModelCreate.getAll);
router.get("/getoneModel", ModelCreate.getOne);
router.delete("/deleteModel", ModelCreate.delete);

router.post("/createCountry", role, CountryCreate.create);
router.get("/getallCountry", CountryCreate.getAll);
router.get("/getoneCountry", CountryCreate.getOne);
router.delete("/deleteCountry", CountryCreate.delete);

export default router;
