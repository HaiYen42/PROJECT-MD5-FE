import { Component } from '@angular/core';
import {NationService} from "../../../../service/nation.service";
import {Nation} from "../../../../model/Nation";

@Component({
  selector: 'app-create-nation',
  templateUrl: './create-nation.component.html',
  styleUrls: ['./create-nation.component.scss']
})
export class CreateNationComponent {
  status='Form Creat Nation';
  form: any={};
  nation?:Nation;


  constructor(private nationService: NationService) {
  }

  createNation() {
    this.nation = new Nation(
      this.form.name
    )
    this.nationService.createNationService(this.nation).subscribe(data=>{
      console.log('data-->'+ data.message)
      if (data.message=='name_existed'){
        this.status = 'The name is existed, try again !!!'
      } else if(data.message=='success'){
        this.status = 'Create Success'
      }
    })
  }


}
