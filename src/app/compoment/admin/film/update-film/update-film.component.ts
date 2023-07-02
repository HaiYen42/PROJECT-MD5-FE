import {Component, Inject} from '@angular/core';
import {Film} from "../../../../model/Film";
import {FilmService} from "../../../../service/film.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {CategoryService} from "../../../../service/category.service";
import {NationService} from "../../../../service/nation.service";
import {Category} from "../../../../model/Category";
import {Nation} from "../../../../model/Nation";
import {signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.scss']
})
export class UpdateFilmComponent {
  status = 'Update Film';
  // form: any = {};
  // @ts-ignore
  film = new Film();
  // validateCategory = new FormControl('', [
  //   Validators.required
  // ])
  // validateNation = new FormControl('', [
  //   Validators.required
  // ])
  listCategory: Category[] = [];
  listNation: Nation[] = [];

  selectedValue?: string;

  constructor(private filmService: FilmService,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              private categoryService: CategoryService,
              private nationService: NationService) {
  }

  ngOnInit(): void {
    console.log('data tu inject --->', this.data.dataKey)
    this.filmService.getFilmById(this.data.dataKey).subscribe(data => {
      this.film = data;
      console.log('Film edit -------------------- --->', this.film)
    })
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
      console.log('listcategory--->', this.listCategory)
    })
    this.nationService.getListNation().subscribe(data => {
      this.listNation = data;
      console.log('nation--->', this.listNation)
    })
  }

  updateFilm() {
    if(this.film.name==undefined){
      this.status = 'Please enter the name'
      return;
    }
    if (this.film.avatar==undefined){
      this.status ='Please upload avatar'
      return;
    }
    if (this.film.description== undefined){
      this.status = 'Please enter description'
      return;
    }
    if (this.film.filmLink== undefined){
      this.status = 'Please upload Film'
      return;
    }
    if (this.film.category== undefined){
      this.status = 'Please choose category'
      return;
    }
    if (this.film.nation== undefined){
      this.status = 'Please choose nation'
      return;
    }
    this.film = new Film(
      this.film.name,
      this.film.avatar,
      this.film.description,
      this.film.filmLink,
      this.film.category,
      this.film.nation
    )

    console.log("thisFilm", this.film)
    this.filmService.updateFilm(this.data.dataKey, this.film).subscribe(data => {
      console.log('filmupdate--->', data)
      console.log("message-->", data.message)
      if (data.message=='no_change'){
        this.status= 'No change'
      }else if (data.message=='update_success'){
        this.status = 'Update Film Success !'
      }
    })
  }

  onUploadAvatar($event: string) {
    this.film.avatar = $event;
    console.log('this.film.avatar -->', this.film.avatar)
  }
  onUploadFile($event: string) {
    this.film.filmLink = $event;
  }
}
