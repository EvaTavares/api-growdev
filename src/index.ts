import express, { Request, Response } from "express";
import { Growdever } from "./models/growdev";

const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log("entrou na rota");
  const growdever1 = new Growdever("gr1", "eva", 23);
  res.status(200).send({ ok: true, data: growdever1.toJson() });
});

app.listen(3333, () => {
  console.log("API is running");
});
