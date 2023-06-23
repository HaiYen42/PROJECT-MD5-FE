import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    openSideBar();
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(["/"])
  }
}
function openSideBar() {
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");
  // @ts-ignore
  closeBtn.addEventListener("click", ()=>{
    // @ts-ignore
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });
  // @ts-ignore
  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    // @ts-ignore
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });
  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
    // @ts-ignore
    if(sidebar.classList.contains("open")){
      // @ts-ignore
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
      // @ts-ignore
      closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
  }
}
