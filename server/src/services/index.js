import schedule from "./schedule";

export default async ({ db, emitter }) => {
  return {
    scheduler: schedule({ emitter, db })
  };
};
