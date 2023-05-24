import { Request, Response } from "express";
import { growdevers } from "../database/growdevers";
import { Skill } from "../models/skill.model";

export class SkillCrontroler {
  public list(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const growdever = growdevers.find((growdever) => growdever.id === id);
      if (!growdever) {
        return res.status(404).send({
          ok: false,
          message: "Growdever was not found",
        });
      }

      return res.status(200).send({
        ok: true,
        message: "Skills were sucessfully listed",
        data: [],
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public create(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, isActive } = req.body;

      if (!nome) {
        return res.status(404).send({
          ok: false,
          message: "Nome was not found",
        });
      }
      if (!isActive) {
        return res.status(404).send({
          ok: false,
          message: "IsActive was not found",
        });
      }

      const growdever = growdevers.find((growdever) => growdever.id === id);
      if (!growdever) {
        return res.status(404).send({
          ok: false,
          message: "Growdever was not found",
        });
      }

      const skill = new Skill(nome, isActive);
      growdever.skills.push(skill);

      return res.status(201).send({
        ok: true,
        message: "Skill was sucessfully created",
        data: growdever.toJson(),
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
      const { id, skillId } = req.params;

      const growdever = growdevers.find((growdever) => growdever.id === id);
      if (!growdever) {
        return res.status(404).send({
          ok: false,
          message: "Growdever was not found",
        });
      }

      const skillIdenx = growdever.skills.findIndex(
        (skill) => skill.id === skillId
      );
      if (skillIdenx < 0) {
        return res.status(404).send({
          ok: false,
          message: "Skill was not found",
        });
      }

      const deletedSkill = growdever.skills.splice(skillIdenx, 1);

      return res.status(201).send({
        ok: true,
        message: "Skill was sucessfully deleted",
        data: deletedSkill[0].toJson(),
      });
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
