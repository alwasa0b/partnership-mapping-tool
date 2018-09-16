import { Router } from "express";
import survey from "./survey";

export default ({ config, db, emitter }) => {
  const api = Router();

  api.use("/survey", survey({ config, db, emitter }));

  return api;
};
