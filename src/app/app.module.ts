import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './compoment/layout/user/navbar/navbar.component';
import {FooterComponent} from './compoment/layout/user/footer/footer.component';
import {HomeComponent} from './compoment/pages/home/home.component';
import {CustomBtnComponent} from './compoment/customs/custom-btn/custom-btn.component';
import {RegisterComponent} from './compoment/pages/form-login/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './compoment/pages/form-login/login/login.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {UploadAvatarComponent} from './compoment/upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChildInputComponent} from './compoment/input-output/@input/child-input/child-input.component';
import {DadInputComponent} from './compoment/input-output/@input/dad-input/dad-input.component';
import {ChildOutputComponent} from './compoment/input-output/@output/child-output/child-output.component';
import {DadOutputComponent} from './compoment/input-output/@output/dad-output/dad-output.component';
import {ChangeAvatarComponent} from './compoment/pages/form-login/change-avatar/change-avatar.component';
import {AuthInterceptor} from "./service/auth.interceptor";
import {ListCategoryComponent} from './compoment/admin/category/list-category/list-category.component';
import {CreateCategoryComponent} from './compoment/admin/category/create-category/create-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { UpdateCategoryComponent } from './compoment/admin/category/update-category/update-category.component';
import { AdminComponent } from './compoment/admin/admin/admin.component';
import { Home2Component } from './compoment/pages/home2/home2.component';
import { AdminIndexComponent } from './compoment/admin/admin-index/admin-index.component';
import { SidebarComponent } from './compoment/admin/sidebar/sidebar.component';
import { DeleteCategoryComponent } from './compoment/admin/category/delete-category/delete-category.component';
import { PageFilmComponent } from './compoment/admin/film/page-film/page-film.component';
import { CreateFilmComponent } from './compoment/admin/film/create-film/create-film.component';
import {MatSelectModule} from "@angular/material/select";
import { UploadFileComponent } from './compoment/upload/upload-file/upload-file.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { UpdateFilmComponent } from './compoment/admin/film/update-film/update-film.component';
import { DeleteFilmComponent } from './compoment/admin/film/delete-film/delete-film.component';
import { ListNationComponent } from './compoment/admin/nation/list-nation/list-nation.component';
import { CreateNationComponent } from './compoment/admin/nation/create-nation/create-nation.component';
import { UpdateNationComponent } from './compoment/admin/nation/update-nation/update-nation.component';
import { DeleteNationComponent } from './compoment/admin/nation/delete-nation/delete-nation.component';
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckAdminGuard} from "./service/CheckAdminGuard";
import {PageUserFilmComponent} from "./compoment/pages/film-user/list-film/page-user-film.component";
import { DetailFilmComponent } from './compoment/pages/film-user/detail-film/detail-film.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ListUserComponent } from './compoment/admin/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomBtnComponent,
    RegisterComponent,
    LoginComponent,
    UploadAvatarComponent,
    ChildInputComponent,
    DadInputComponent,
    ChildOutputComponent,
    DadOutputComponent,
    ChangeAvatarComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    AdminComponent,
    Home2Component,
    AdminIndexComponent,
    SidebarComponent,
    DeleteCategoryComponent,
    PageFilmComponent,
    CreateFilmComponent,
    UploadFileComponent,
    UpdateFilmComponent,
    DeleteFilmComponent,
    ListNationComponent,
    CreateNationComponent,
    UpdateNationComponent,
    DeleteNationComponent,
    PageFilmComponent,
    PageUserFilmComponent,
    DetailFilmComponent,
    ListUserComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressBarModule,
    MatButtonToggleModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CheckLoginGuard,
    CheckAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
