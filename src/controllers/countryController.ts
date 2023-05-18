/** @format */

import { Request, Response } from "express";
import { Country } from "../models/models";

class CountryCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const createtype = await Country.create({ name });
      res.status(200).json(createtype);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await Country.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getOnemodel = await Country.findOne({ where: { id: id } });
      res.status(200).json(getOnemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Country.destroy({ where: { id: id } });
      res.status(200).json({ meesage: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new CountryCreate();
