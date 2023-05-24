import { v4 as createUuid } from "uuid";
import { Skill } from "./skill.model";
export class Growdever {
  private _id: string;
  private _skills: Skill[];

  constructor(private _nome: string, private _idade: number) {
    this._id = createUuid();
    this._skills = [];
  }

  public get id() {
    return this._id;
  }

  public get nome() {
    return this._nome;
  }

  public get idade() {
    return this._idade;
  }
  public set idade(idade: number) {
    this._idade = idade;
  }

  public get skills() {
    return this._skills;
  }

  public toJson() {
    return {
      id: this._id,
      nome: this._nome,
      idade: this._idade,
      skills: this._skills,
    };
  }
}
