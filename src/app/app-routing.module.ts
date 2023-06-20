import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./compoment/pages/home/home.component";
import {RegisterComponent} from "./compoment/pages/form-login/register/register.component";
import {LoginComponent} from "./compoment/pages/form-login/login/login.component";
import {DadInputComponent} from "./compoment/input-output/@input/dad-input/dad-input.component";
import {DadOutputComponent} from "./compoment/input-output/@output/dad-output/dad-output.component";
import {ChangeAvatarComponent} from "./compoment/pages/form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./compoment/admin/category/list-category/list-category.component";
import {UpdateCategoryComponent} from "./compoment/admin/category/update-category/update-category.component";
import {AdminComponent} from "./compoment/admin/admin/admin.component";
import {Home2Component} from "./compoment/pages/home2/home2.component";
import {AdminIndexComponent} from "./compoment/admin/admin-index/admin-index.component";

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
      {path: '', component: Home2Component},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'input', component: DadInputComponent},
      {path: 'output', component: DadOutputComponent},
      {path: 'change-avatar', component: ChangeAvatarComponent},

    ]},

  {path:'admin', component:AdminComponent, children:[
      {path: '', component: AdminIndexComponent},
      {path: 'category', component: ListCategoryComponent},
    ]}
  // {path: 'update-category/:id', component: UpdateCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
