import { Growdever } from "../models/growdev";
import { Skill } from "../models/skill.model";

export const growdevers = [
  new Growdever("josé", 20),
  new Growdever("Joana", 62),
  new Growdever("Daphne", 38),
  new Growdever("Bruna", 40),
  new Growdever("Leandro", 12),
];

growdevers[0].skills.push(new Skill("node_js", true));
growdevers[0].skills.push(new Skill("typescript", true));
growdevers[1].skills.push(new Skill("backend", true));
growdevers[1].skills.push(new Skill("react", false));
