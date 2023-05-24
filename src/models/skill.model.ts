import { v4 as createUuid } from "uuid";

export class Skill {
  private _id: string;

  constructor(private _nome: string, private _isActivive: boolean) {
    this._id = createUuid();
  }

  public get id() {
    return this._id;
  }

  public toJson() {
    return {
      id: this._id,
      nome: this._nome,
      isActive: this._isActivive,
    };
  }
}
