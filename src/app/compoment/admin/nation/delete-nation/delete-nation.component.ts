import {Component, Inject, OnInit} from '@angular/core';
import {NationService} from "../../../../service/nation.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Nation} from "../../../../model/Nation";

@Component({
  selector: 'app-delete-nation',
  templateUrl: './delete-nation.component.html',
  styleUrls: ['./delete-nation.component.scss']
})
export class DeleteNationComponent implements OnInit{
  status = 'Are you sure to delete this nation ?';
  // @ts-ignore
  nation = new Nation();

  constructor(private nationService : NationService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    this.nationService.getNationById(this.data.dataKey).subscribe(data=>{
      this.nation = data
    })
  }
}
