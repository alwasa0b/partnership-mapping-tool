import { Router } from "express";
import oauth2orize from "oauth2orize";
import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { getUid } from "../lib/util";

export default ({ db }) => {
  const api = Router();
  const server = oauth2orize.createServer();

  server.exchange(
    oauth2orize.exchange.password((client, username, password, scope, done) => {
      db.user.findOne({ username }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }

        db.token.findOne({ user_id: user.id }, (err, validToken) => {
          if (err) return done(err);
          if (validToken) {
            return validToken.refresh(() => {
              return done(null, validToken);
            });
          }

          const token = new db.token({
            oauth_token: getUid(256),
            user_id: user.id
          });

          token.save((error, saved) => {
            if (error) return done(error);
            return done(null, saved);
          });
        });
      });
    })
  );

  passport.use(
    new BearerStrategy(function(oauth_token, done) {
      db.token.findOne({ oauth_token }, (err, token) => {
        if (err) return done(err);

        if (!token || new Date(token.expires) < new Date())
          return done(null, false);

        return done(null, {}, { scope: "admin" });
      });
    })
  );

  return api.post("/", [server.token(), server.errorHandler()]);
};
