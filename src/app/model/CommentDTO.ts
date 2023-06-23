import {SignUpForm} from "./SignUpForm";

export class CommentDTO {
  content?: string;
  user?:SignUpForm

  constructor(content: string, user: SignUpForm) {
    this.content = content;
    this.user = user;
  }
}
