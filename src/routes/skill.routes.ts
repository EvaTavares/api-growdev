import { Router } from "express";
import { SkillCrontroler } from "../controllers/skill.controller";

export const skillRoutes = () => {
  const app = Router({
    mergeParams: true,
  });

  app.get("/", new SkillCrontroler().list);
  app.post("/", new SkillCrontroler().create);
  app.delete("/:skillId", new SkillCrontroler().delete);

  return app;
};
