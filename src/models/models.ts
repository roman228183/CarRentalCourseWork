/** @format */

import Db from "../db/db";
import DataTypes from "sequelize";

const User = Db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = Db.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Car = Db.define("car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  priceperhour: { type: DataTypes.INTEGER },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const Model = Db.define("model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Type = Db.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Country = Db.define("country", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

Model.hasMany(Car);
Car.belongsTo(Model);

Type.hasMany(Car);
Car.belongsTo(Type);

Country.hasMany(Car);
Car.belongsTo(Country);

User.hasOne(Basket);
Basket.belongsTo(User);

export { User, Car, Model, Type, Country, Basket };
