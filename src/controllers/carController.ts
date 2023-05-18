/** @format */

import { Request, Response } from "express";
import { Car } from "../models/models";

class CarCreate {
  async create(req: Request, res: Response) {
    try {
      const {
        name,
        description,
        priceperhour,
        color,
        modelId,
        countryId,
        typeId,
      } = req.body;
      const createmodel = await Car.create({
        name,
        description,
        priceperhour,
        color,
        modelId,
        countryId,
        typeId,
      });
      res.status(200).json(createmodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await Car.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getOnemodel = await Car.findOne({ where: { id: id } });
      res.status(200).json(getOnemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Car.destroy({ where: { id: id } });
      res.status(200).json({ message: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new CarCreate();
