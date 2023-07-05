import {Category} from "./Category";
import {Nation} from "./Nation";
import {SignUpForm} from "./SignUpForm";
import {CommentDTO} from "./CommentDTO";

export class Film {
  public id?: number;
  public name?: string;
  public avatar?:string;
  public description?:string;
  public filmLink?:string;
  public categoryList?: Category[];
  public nation?: Nation;
  public user?: SignUpForm;
  public likeList?:[];
  public commentList?: CommentDTO[] ;
  public view?:number;

  constructor(name: string, avatar: string, description: string, filmLink: string, categoryList: Category [], nation: Nation,) {
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.filmLink = filmLink;
    this.categoryList = categoryList;
    this.nation = nation;


  }
}
