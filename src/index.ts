import express, { Request, Response } from "express";
import { Growdever } from "./models/growdev";
import { growdevers } from "./database/growdevers";
import { normalize } from "path";
import { GrowdeverController } from "./controllers/growdever.controller";
import { growdeverRoutes } from "./routes/growdever.routes";
import { skillRoutes } from "./routes/skill.routes";

const app = express();
app.use(express.json());

app.use("/growdever", growdeverRoutes());

//Rotas de growdever => /growdever
//listar growdevers
//http://localhost:3333/growdever?idade=20
// app.get("/growdever", new GrowdeverController().list);

// //Obter um Growdever por ID
// //http://localhost:3333/growdever/:id
// //http://localhost:3333/growdever/1
// app.get("/growdever/:id", new GrowdeverController().get);

// //Criar um growdever
// //POST http://localhost:3333/growdever
// //aao.post("/growdever", (req:Request, res:Response) =>{}})
// app.post("/growdever", new GrowdeverController().create);

// //DELETE
// app.delete("/growdever:id", new GrowdeverController().delete);

// //UPDATE
// app.put("/growdever:id", new GrowdeverController().update);

// app.listen(3333, () => {
//   console.log("API is running");
// });
