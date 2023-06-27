export class SignUpForm{
  public id?: number;
  public name: string;
  public username: string;
  public email: string;
  public password: string;
  public roles: any;

  constructor(name: string, username: string, email: string, password: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['USER'];
  }
}
