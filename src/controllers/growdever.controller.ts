import { growdevers } from "../database/growdevers";
import { Growdever } from "../models/growdev";
import { Request, Response } from "express";

export class GrowdeverController {
  public create(req: Request, res: Response) {
    try {
      const { nome, idade } = req.body;

      if (!nome) {
        return res.status(400).send({
          ok: false,
          message: "Nome was not provided",
        });
      }

      if (!idade) {
        return res.status(400).send({
          ok: false,
          message: "Idade was not provided",
        });
      }

      const growdever = new Growdever(nome, idade);
      growdevers.push(growdever);

      return res.status(201).send({
        ok: true,
        message: "Growdever was successfully created",
        data: growdever,
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const growdeverIndex = growdevers.findIndex(
        (growdever) => growdever.id === id
      );
      if (growdeverIndex < 0) {
        return res.status(404).send({
          ok: false,
          message: " Growdever was not found",
        });
      }

      const deletedGrowdev = growdevers.splice(growdeverIndex, 1);
      return res.status(200).send({
        ok: true,
        message: " Growdever was successfully deleted",
        data: deletedGrowdev[0],
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { idade } = req.body;

      const growdever = growdevers.find((growdever) => growdever.id === id);
      if (!growdever) {
        return res.status(404).send({
          ok: false,
          message: "Growdever was not found",
        });
      }
      growdever.idade = idade;

      return res.status(200).send({
        ok: true,
        message: "Growdever was successfully updated",
        data: growdever.toJson(),
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public list(req: Request, res: Response) {
    try {
      const { idade } = req.query;

      let result = growdevers;

      if (idade) {
        result = growdevers.filter(
          (growdever) => growdever.idade === Number(idade)
        );
      }

      return res.status(200).send({
        ok: true,
        message: "Growdevers were sucessfully listed",
        data: result.map((growdever) => growdever.toJson()),
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = growdevers.find((growdever) => growdever.id === id);

      if (!result) {
        return res.status(404).send({
          ok: false,
          message: "Growdever was not found",
        });
      }

      return res.status(200).send({
        ok: true,
        message: "Growdevers was sucessfully obtained",
        data: result.toJson(),
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
