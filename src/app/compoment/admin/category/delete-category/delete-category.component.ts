import {Component, Inject, OnInit} from '@angular/core';
import {CategoryService} from "../../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Category} from "../../../../model/Category";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit{
  status='Are you sure to delete this items ?';
  form: any = {};

  // @ts-ignore
  category= new Category;

  constructor(private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA)
              public data:any) {
  }

  ngOnInit(): void {
    console.log('data tu inject --->', this.data.dataKey)
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data=>{
      this.category = data;
      console.log(this.category)
    })
  }
}
