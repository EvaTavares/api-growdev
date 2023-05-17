export class Growdever {
  constructor(
    private _id: string,
    private _nome: string,
    private _idade: number
  ) {}

  public get id() {
    return this._id;
  }

  public get nome() {
    return this._nome;
  }

  public get idade() {
    return this._idade;
  }

  public toJson() {
    return {
      id: this._id,
      nome: this._nome,
      idade: this._idade,
    };
  }
}
