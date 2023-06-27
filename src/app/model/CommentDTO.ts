import {SignUpForm} from "./SignUpForm";
import {Film} from "./Film";

export class CommentDTO {
  public content: string;
  public user: any;
  public film: any;


  constructor(content: string, user: any, film: any) {
    this.content = content;
    this.user = user;
    this.film = film;
  }
}
