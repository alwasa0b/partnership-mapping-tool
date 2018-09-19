import { version } from "../../package.json";
import { Router } from "express";
import login from "./login";
import survey from "./survey";
// import user from "./user";
import admin from "./admin";
import passport from "passport";

export default ({ config, db, emitter }) => {
  const api = Router();

  api.use("/login", login({ config, db }));

  api.use("/test", survey({ config, db }));

  // api.use("/user", user({ config, db }));

  api.use(
    "/admin",
    passport.authenticate("bearer", { session: false }),
    admin({ config, db, emitter })
  );

  api.get("/", (req, res) => {
    res.json({ version });
  });

  return api;
};
