import {Component, OnInit} from '@angular/core';
import {Category} from "../../../../model/Category";
import {Film} from "../../../../model/Film";
import {FormControl, Validators} from "@angular/forms";
import {CategoryService} from "../../../../service/category.service";
import {FilmService} from "../../../../service/film.service";
import {Nation} from "../../../../model/Nation";
import {NationService} from "../../../../service/nation.service";

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {
  form: any = {};
  categoryList: Category[] = [];
  listNation: Nation[] = [];
  film?: Film;
  status = 'Form Create Film'
  validateCategory = new FormControl('', [
    Validators.required
  ])
  validateNation = new FormControl('', [
    Validators.required
  ])
  selectedValue?: string;

  constructor(private categoryService: CategoryService,
              private filmService: FilmService,
              private nationService: NationService) {
  }


  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data => {
      this.categoryList = data;
      console.log('listcategory--->', this.categoryList)
    })
    this.nationService.getListNation().subscribe(data => {
      this.listNation = data;
      // console.log('nation--->', this.listNation)
    })

  }

  onUploadAvatar($event: string) {
    this.form.avatar = $event;
  }

  onUploadFile($event: string) {
    this.form.filmLink = $event;
  }

  createFilm() {
    console.log('listCategory--->', this.form.categoryList)
    if (this.form.categoryList == undefined) {
      this.status = 'Please select on category'
      return;
    }
    if (this.form.nation == undefined) {
      this.status = 'Please select on nation'
      return;
    }
    if (this.form.avatar == undefined) {
      this.status = 'Please upload avatar'
      return;
    }
    if (this.form.filmLink == undefined) {
      this.status = 'Please upload film'
      return;
    }
    this.film = new Film(
      this.form.name,
      this.form.avatar,
      this.form.description,
      this.form.filmLink,
      this.form.categoryList,
      this.form.nation,
    )
    console.log('this film--->', this.film)
    this.filmService.createFilmService(this.film).subscribe(data => {
      console.log('data--->', data.message)
      if (data.message == 'create_success') {
        this.status = 'Create Film Success !'
      }
    })
  }
}
