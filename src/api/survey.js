import resource from "resource-router-middleware";
import { toRes } from "../lib/util";

export default ({ db }) =>
  resource({
    id: "survey",

    load({}, id, next) {
      db.survey.findById(id, next);
    },

    async index({}, res) {
      const survays = await db.survey.find({}, toRes(res));
      res.status(200).json(survays);
    },

    create({ body }, res) {
      const survey = new db.survey({ name: body.name });
      survey.save(toRes(res));
    },

    read({ survey }, res) {
      res.json(survey);
    },

    update({ survey, body }, res) {
      survey.text = body.text;
      survey.status = body.status;
      survey.save(toRes(res));
    },

    delete({ survey }, res) {
      survey.remove(() => res.sendStatus(204));
    }
  });
