//import schedule from "node-schedule";

// const jobs = {};

export default async ({ db }) => {
  const Agenda = require("agenda");

  const agenda = new Agenda({ mongo: db.mongo });

  agenda.define(
    "send email report5",
    { priority: "high", concurrency: 10 },
    (job, done) => {
      console.log("agenda");
      job.every("2 seconds");
      job.save();
      done();
    }
  );

  (async function() {
    await agenda.start();

    await agenda.schedule("today at 22:01", "send email report5", {
      to: "admin@example.com"
    });
  })();

  //   [].reduce(
  //     (p, n) => ({
  //       ...p,
  //       [n._id]: schedule.scheduleJob(schedule.startingOn, function() {
  //         console.log("The world is going to end today.");
  //       })
  //     }),
  //     jobs
  //   );
};
