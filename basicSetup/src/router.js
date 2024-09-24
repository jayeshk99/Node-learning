import { Router } from "express";
import { getUsers, sendMessage } from "./service.js";

const baseRoute = Router();

baseRoute.route("/login").get(async (req, res) => {
  try {
    // let prom = new Promise((resolve, reject) => {
    //   resolve("prom resolved");
    // });
    // let result = await prom;
    // console.log("res:", result);

    // let result = await getUsers();
    // res.status(200).send(result);
    let result = await sendMessage();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default baseRoute;
