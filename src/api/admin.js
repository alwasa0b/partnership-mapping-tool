import { Router } from "express";
import survey from "./survey";

export default ({ config, db }) => {
  const api = Router();

  api.use("/survey", survey({ config, db }));

  return api;
};
