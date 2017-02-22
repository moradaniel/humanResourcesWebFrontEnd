/*
export interface UserModel {
    id: number;
    username: string;
    money: number;
    registrationInstant: string;
}*/
export class UserModel {
  public id: number;
  username: string;
  money: number;
  registrationInstant: string;

  public constructor(
    fields?: {
      id?:number,
      username?: string,
      money?: number,
      registrationInstant?: string
    }) {
    if (fields) {
      this.id = fields.id || this.id;
      this.username = fields.username || this.username;
      this.money = fields.money || this.money;
      this.registrationInstant = fields.registrationInstant || this.registrationInstant;
    }
  }
}

