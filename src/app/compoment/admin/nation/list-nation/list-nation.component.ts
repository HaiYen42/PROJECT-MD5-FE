import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateNationComponent} from "../create-nation/create-nation.component";
import {Nation} from "../../../../model/Nation";
import {NationService} from "../../../../service/nation.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DeleteNationComponent} from "../delete-nation/delete-nation.component";
import {UpdateNationComponent} from "../update-nation/update-nation.component";

@Component({
  selector: 'app-list-nation',
  templateUrl: './list-nation.component.html',
  styleUrls: ['./list-nation.component.scss']
})
export class ListNationComponent implements OnInit{
  // @ts-ignore
  listNation: Nation[];
  displayedColumns: string[] = ['position','id', 'name', 'edit', 'delete'];
  dataSource?: any;
  constructor(private dialog: MatDialog,
              private nationService: NationService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateNationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.nationService.getListNation().subscribe(data => {
          this.listNation = data;
          this.dataSource = new MatTableDataSource<Nation>(this.listNation);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  ngOnInit(): void {
    this.nationService.getListNation().subscribe(data=>{
      console.log('data-->', data)
      this.listNation = data;
      this.dataSource = new MatTableDataSource<Nation>(this.listNation);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateNationComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.nationService.getListNation().subscribe(data => {
          this.listNation = data;
          this.dataSource = new MatTableDataSource<Nation>(this.listNation);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteNationComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result-->',result)
      if(result){
        this.nationService.deleteNation(id).subscribe(()=>{
          this.nationService.getListNation().subscribe(data =>{
            this.listNation = data;
            this.dataSource = new MatTableDataSource<Nation>(this.listNation);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    })

  }

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
}
