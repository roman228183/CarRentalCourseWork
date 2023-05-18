/** @format */

import { Request, Response } from "express";
import { Model } from "../models/models";

class ModelCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const createtype = await Model.create({ name });
      res.status(200).json(createtype);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await Model.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getOnemodel = await Model.findOne({ where: { id: id } });
      res.status(200).json(getOnemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Model.destroy({ where: { id: id } });
      res.status(200).json({ meesage: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ModelCreate();
