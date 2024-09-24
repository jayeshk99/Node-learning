import express from "express";
import cookieParser from "cookie-parser";
// import  from cors
import baseRoute from "./router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors())
app.use(cookieParser());

app.use("/app", baseRoute);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
