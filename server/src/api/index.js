import { version } from "../../package.json";
import { Router } from "express";
import login from "./login";
import user from "./user";
import admin from "./admin";
import passport from "passport";

export default ({ config, db }) => {
  const api = Router();

  api.use("/login", login({ config, db }));

  api.use("/user", user({ config, db }));

  api.use(
    "/admin",
    passport.authenticate("bearer", { session: false }),
    admin({ config, db })
  );

  api.get("/", (req, res) => {
    res.json({ version });
  });

  return api;
};
