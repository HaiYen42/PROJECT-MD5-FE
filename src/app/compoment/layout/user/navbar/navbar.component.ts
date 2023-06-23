import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../service/token.service";
import {adminSidebar} from "../../../customs/js/js";
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {NationService} from "../../../../service/nation.service";
import {Nation} from "../../../../model/Nation";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name = '';
  avatar = '';
  checkLogin = false;
  checkAdmin = false;
  listCategory: Category[] = [];
  listNation : Nation[] =[];

  constructor(private tokenService: TokenService,
              private categoryService: CategoryService,
              private nationService: NationService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
      if (JSON.stringify(this.tokenService.getRole())==JSON.stringify(['ADMIN'])){
        this.checkAdmin = true;
      }
    }
    this.categoryService.getListCategory().subscribe(data=>{
      this.listCategory = data;
      console.log('listCategory--->', this.listCategory )
    })
    this.nationService.getListNation().subscribe(data=>{
      this.listNation = data;
      console.log('dataNation--->', this.listNation);
    })
    adminSidebar();

  }

  logOut() {
    sessionStorage.clear();
    window.location.reload();
  }
}
