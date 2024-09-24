import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("abc", "postgres", "5432", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});
