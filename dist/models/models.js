"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = exports.Country = exports.Type = exports.Model = exports.Car = exports.User = void 0;
var db_1 = __importDefault(require("../db/db"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = db_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
});
exports.User = User;
var Basket = db_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Car = db_1.default.define("car", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: false, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    color: { type: sequelize_1.default.STRING },
    priceperhour: { type: sequelize_1.default.INTEGER },
    availability: { type: sequelize_1.default.BOOLEAN, defaultValue: true },
});
exports.Car = Car;
var Model = db_1.default.define("model", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Model = Model;
var Type = db_1.default.define("type", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Type = Type;
var Country = db_1.default.define("country", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Country = Country;
Model.hasMany(Car);
Car.belongsTo(Model);
Type.hasMany(Car);
Car.belongsTo(Type);
Country.hasMany(Car);
Car.belongsTo(Country);
User.hasOne(Basket);
Basket.belongsTo(User);
