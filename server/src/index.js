import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import passport from "passport";
import initializeDb from "./db";
import middleware from "./middleware";
import api from "./api";
import config from "./config.json";
// import services from "./services";
import { EventEmitter } from "events";

const emitter = new EventEmitter();
const app = express();
app.server = http.createServer(app);

app.use(morgan("dev"));

app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

initializeDb(db => {
  // services({ db, emitter });

  app.use(middleware({ config, db }));
  app.use("/api", api({ config, db, emitter }));
  app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
