import {Component, OnInit, ViewChild} from '@angular/core';
import {Film} from "../../../../model/Film";
import {FilmService} from "../../../../service/film.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DetailFilmComponent} from "../detail-film/detail-film.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-film',
  templateUrl: './page-user-film.component.html',
  styleUrls: ['./page-user-film.component.scss']
})
export class PageUserFilmComponent implements OnInit {
  listFilm?: Film[];
  totalElements: number = 0;
  dataSource?: any;


  constructor(private filmService: FilmService,
              public dialog: MatDialog) {
  }

  // Phân trang
  getPageRequest(request: any) {
    this.filmService.getPageFilm(request).subscribe(data => {
      console.log('data--->', data);
      this.listFilm = data['content'];
      console.log('content --->', this.listFilm)
      this.totalElements = data['totalElements'];
      console.log('total --->', this.totalElements)
    })
  }

  ngOnInit(): void {
    const request = {page: 0, size: 4}
    this.getPageRequest(request)
    this.filmService.getListFilm().subscribe(data => {
      console.log('data--->', data)
      this.listFilm = data;
      this.dataSource = new MatTableDataSource<Film>(this.listFilm);
      this.dataSource.paginator = this.paginator;
    });
  }

  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
}
