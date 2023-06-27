import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {SignUpForm} from "../../../../model/SignUpForm";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  displayedColumns: string[] = ['position', 'id', 'name', 'avatar'];
  dataSource: any;
  listUser: SignUpForm[]=[]


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getListUser().subscribe(data=>{
      this.listUser = data;
      console.log(this.listUser)
      this.dataSource = new MatTableDataSource<SignUpForm>(this.listUser);
      this.dataSource.paginator = this.paginator;
    })
  }
  // phan trang
  @ViewChild(MatPaginator) paginator?: MatPaginator;
}
