import {Component, Inject, OnInit} from '@angular/core';
import {Nation} from "../../../../model/Nation";
import {ActivatedRoute} from "@angular/router";
import {NationService} from "../../../../service/nation.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-nation',
  templateUrl: './update-nation.component.html',
  styleUrls: ['./update-nation.component.scss']
})
export class UpdateNationComponent implements OnInit{
  status= 'Form Update';
  // @ts-ignore
  nation = new Nation();

  constructor(private actRouter: ActivatedRoute,
              private nationService: NationService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  updateNation() {
    console.log('nameNation',this.nation.name)
    if(this.nation.name==''){
      this.status = 'Please enter the name'
      return;
    }
    this.nationService.updateNation(this.data.dataKey, this.nation).subscribe(data=>{
      console.log('datamess-->', data.message)
      if (data.message=='name_existed'){
        this.status = 'Name existed, Try again !'
      }else if (data.message == 'no_change'){
        this.status= 'No change !'
      }else if (data.message =='success'){
        this.status = 'Update Success !'
      }
    })
  }

  ngOnInit(): void {
    this.nationService.getNationById(this.data.dataKey).subscribe(data=>{
      // console.log(data)
      this.nation= data;
    })

  }
}
