import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenService} from "../../../../service/token.service";
import {adminSidebar} from "../../../customs/js/js";
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {NationService} from "../../../../service/nation.service";
import {Nation} from "../../../../model/Nation";
import {CommonService} from "../../../../service/common.service";
import {activate} from "@angular/fire/remote-config";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nameUser = '';
  avatar = '';
  checkLogin = false;
  checkAdmin = false;
  listCategory: Category[] = [];
  listNation: Nation[] = [];
  form: any={};


  constructor(private tokenService: TokenService,
              private categoryService: CategoryService,
              private nationService: NationService,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.nameUser = this.tokenService.getName();
      console.log('nameUser-->', this.nameUser)
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
      if (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN'])) {
        this.checkAdmin = true;
      }
    }
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
    })
    this.nationService.getListNation().subscribe(data => {
      this.listNation = data;
    })
    adminSidebar();

  }

  logOut() {
    sessionStorage.clear();
    window.location.reload();
  }


  selectCt(ct: any) {
    this.commonService.triggerCategory = true;
    this.commonService.action = ct.name;
    console.log(ct.name)
  }

  selectNation(nation:any) {
    this.commonService.triggerNation = true;
    this.commonService.action = nation.name;
  }

  search() {
    console.log(this.form.search)
    this.commonService.triggerSearch = true;
    this.commonService.action ='search';
    this.commonService.valueSearch = this.form.search
  }
}
