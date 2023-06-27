import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateFilmComponent} from "../create-film/create-film.component";
import {MatDialog} from "@angular/material/dialog";
import {FilmService} from "../../../../service/film.service";
import {TokenService} from "../../../../service/token.service";
import {Film} from "../../../../model/Film";
import {UpdateFilmComponent} from "../update-film/update-film.component";
import {DeleteFilmComponent} from "../delete-film/delete-film.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-page-film',
  templateUrl: './page-film.component.html',
  styleUrls: ['./page-film.component.scss']
})
export class PageFilmComponent implements OnInit {
  checkUserLogin = false;
  // @ts-ignore
  listFilm: Film[];
  displayedColumns: string[] = ['position','id', 'name', 'avatar', 'edit', 'delete'];
  dataSource?: any;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private tokenService: TokenService,
              private filmService: FilmService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateFilmComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result || result == undefined) {
        this.filmService.getListFilm().subscribe(data => {
          console.log('data--->', data)
          this.listFilm = data;
          this.dataSource = new MatTableDataSource<Film>(this.listFilm);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.filmService.getListFilm().subscribe(data => {
      console.log('dataFilms--->' + data)
      this.listFilm = data;
      this.dataSource = new MatTableDataSource<Film>(this.listFilm);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateFilmComponent, {
      data: {
        dataKey: id
      }
    });
    console.log('id--->', id)
    dialogRef.afterClosed().subscribe(result => {
      console.log('result--->', result);
      if (result || result == undefined) {
        this.filmService.getListFilm().subscribe(data => {
          console.log('data--->', data)
          // this.listCategory = data;
          // this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          // this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteFilmComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filmService.deleteFilm(id).subscribe(() => {
          this.filmService.getListFilm().subscribe(data => {
            this.listFilm = data;
            this.dataSource = new MatTableDataSource<Film>(this.listFilm);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }


}
