import resource from "resource-router-middleware";
import { toRes } from "../lib/util";

export default ({ db }) =>
  resource({
    id: "survey",

    load({}, id, next) {
      db.survey.findById(id, next);
    },

    async index({}, res) {
      const survays = await db.survey
        .find({})
        .populate("targets.questionnaire")
        .exec();
      res.json(survays);
    },

    async create(tr, res) {
      try {
        const survey = new db.survey(tr.body);
        const created = await survey.save();

        res.json(created);
      } catch (error) {
        res.json(error);
      }
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
