import resource from "resource-router-middleware";
import { toRes } from "../lib/util";

export default ({ db }) =>
  resource({
    id: "user",

    load({}, id, next) {
      db.user.findById(id, next);
    },

    index({}, res) {
      db.user.find({}, toRes(res));
    },

    create({ body }, res) {
      const user = new db.user(body);
      user.save(toRes(res));
    },

    read({ user }, res) {
      res.json(user);
    },

    update({ user, body }, res) {
      user.password = body.password;
      user.save(toRes(res));
    },

    delete({ user }, res) {
      user.remove(() => res.sendStatus(204));
    }
  });
