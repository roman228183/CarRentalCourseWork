"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeController_1 = __importDefault(require("../controllers/typeController"));
var modelController_1 = __importDefault(require("../controllers/modelController"));
var countryController_1 = __importDefault(require("../controllers/countryController"));
var carController_1 = __importDefault(require("../controllers/carController"));
var userController_1 = __importDefault(require("../controllers/userController"));
var authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
var roleMiddleware_1 = __importDefault(require("../middleware/roleMiddleware"));
var router = (0, express_1.Router)();
router.post("/registration", userController_1.default.registration);
router.post("/login", userController_1.default.login);
router.get("/check", authMiddleware_1.default, userController_1.default.check);
router.post("/createCar", roleMiddleware_1.default, carController_1.default.create);
router.get("/getallCar", carController_1.default.getAll);
router.get("/getoneCar", carController_1.default.getOne);
router.delete("/deleteCar", carController_1.default.delete);
router.post("/createType", roleMiddleware_1.default, typeController_1.default.create);
router.get("/getallType", typeController_1.default.getAll);
router.get("/getoneType", typeController_1.default.getOne);
router.delete("/deleteType", typeController_1.default.delete);
router.post("/createModel", roleMiddleware_1.default, modelController_1.default.create);
router.get("/getallModel", modelController_1.default.getAll);
router.get("/getoneModel", modelController_1.default.getOne);
router.delete("/deleteModel", modelController_1.default.delete);
router.post("/createCountry", roleMiddleware_1.default, countryController_1.default.create);
router.get("/getallCountry", countryController_1.default.getAll);
router.get("/getoneCountry", countryController_1.default.getOne);
router.delete("/deleteCountry", countryController_1.default.delete);
exports.default = router;
