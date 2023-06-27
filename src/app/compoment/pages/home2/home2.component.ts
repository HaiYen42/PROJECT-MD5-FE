import {Component, DoCheck, OnInit} from '@angular/core';
import {FilmService} from "../../../service/film.service";
import {Film} from "../../../model/Film";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {collectionData} from "@angular/fire/firestore";
import {CommonService} from "../../../service/common.service";
import {NationService} from "../../../service/nation.service";
import {Nation} from "../../../model/Nation";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit, DoCheck {
  listAvatar = [];
  // @ts-ignore
  listTopFilm: Film[];
  // @ts-ignore
  listcategoryId: [];
  // @ts-ignore
  listCategory: Category[];
  // @ts-ignore
  listNation: Nation[];
  mainFilmList ?: Film[];
  // @ts-ignore
  renderList: any[]=[];

  constructor(private filmService: FilmService,
              private categoryService: CategoryService,
              private commonService: CommonService,
              private nationService: NationService) {
  }


  ngOnInit(): void {
    this.filmService.getFilmImg().subscribe(data => {
      // console.log('dataImg-->', data)
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        this.listAvatar.push(data[i].avatar)
      }
      // console.log('img-->', this.listAvatar)
    })
    this.filmService.getTopFilm().subscribe(data => {
      // console.log('data--->', data);
      this.listTopFilm = data;
    })
    this.filmService.getListFilm().subscribe(data => {
      this.mainFilmList = data;
      // @ts-ignore
      this.renderList = this.mainFilmList;
    })
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
    })
    this.nationService.getListNation().subscribe(data=>{
      this.listNation = data;
    })
  }

  getListFilmByCategoryId(id: any) {
    this.filmService.getFilmByCategoryId(id).subscribe(data => {
      this.mainFilmList = data
    })
  }

  ngDoCheck(): void {
    // console.log('trigger trong common',this.commonService.commonTrigger)
    if (this.commonService.triggerCategory){
        this.renderList =[];
        for (let i = 0; i < this.listCategory.length ; i++) {
          if (this.listCategory[i].name==this.commonService.action){
           // @ts-ignore
            this.filmService.getFilmByCategoryId(this.listCategory[i].id).subscribe(data=>{
             this.renderList = data;
           })
          }
        }
      this.commonService.triggerCategory = false
    }
    if (this.commonService.triggerNation){
      this.renderList =[];
      for (let i = 0; i < this.listNation.length ; i++) {
        if (this.listNation[i].name==this.commonService.action){
          // @ts-ignore
          this.filmService.getFilmByNationId(this.listNation[i].id).subscribe(data=>{
            this.renderList = data;
          })
        }
      }
      this.commonService.triggerNation = false
    }
    if (this.commonService.triggerSearch){
      this.renderList =[];
      this.filmService.getListSearch(this.commonService.valueSearch).subscribe(data=>{
        console.log('dataserch--->', data)
        this.renderList = data;
      })

      this.commonService.triggerSearch = false
    }
  }

}
