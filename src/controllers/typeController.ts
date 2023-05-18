/** @format */

import { Request, Response } from "express";
import { Type } from "../models/models";

class TypeCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const createtype = await Type.create({ name });
      res.status(200).json(createtype);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await Type.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getOnemodel = await Type.findOne({ where: { id: id } });
      res.status(200).json(getOnemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Type.destroy({ where: { id: id } });
      res.status(200).json({ message: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TypeCreate();
