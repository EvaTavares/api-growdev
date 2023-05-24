import { Router } from "express";
import { GrowdeverController } from "../controllers/growdever.controller";
import { skillRoutes } from "./skill.routes";

export const growdeverRoutes = () => {
  const app = Router();

  app.get("/", new GrowdeverController().list);
  app.get("/:id", new GrowdeverController().get);
  app.post("/", new GrowdeverController().create);
  app.delete("/:id", new GrowdeverController().delete);
  app.put("/:id", new GrowdeverController().update);

  app.use("/:id/skill", skillRoutes());

  return app;
};
