import {Component, Inject, OnInit} from '@angular/core';
import {Film} from "../../../../model/Film";
import {FilmService} from "../../../../service/film.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.scss']
})
export class DeleteFilmComponent implements OnInit{
  status='Are you sure to delete this items ?';
  form: any={};
  // @ts-ignore
  film= new Film();

  constructor(private filmService: FilmService,
              @Inject(MAT_DIALOG_DATA)
              public data:any) {
  }

  ngOnInit(): void {
    console.log('data tu inject --->', this.data.dataKey)
    this.filmService.getFilmById(this.data.dataKey).subscribe(data=>{
      console.log('data--->', data)
      this.film =data;
      console.log('dataFilm--->',this.film)
    })
  }

}
