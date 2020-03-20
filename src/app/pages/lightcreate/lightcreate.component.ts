import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Light } from '../../interfaces/lightinterface'
import { LightserviceService } from '../../services/lightservice.service'



@Component({
  selector: 'app-lightcreate',
  templateUrl: './lightcreate.component.html',
  styleUrls: ['./lightcreate.component.sass']
})
export class LightcreateComponent implements OnInit {
  addLightForm:FormGroup;
  
  
  
  constructor( private formBuilder: FormBuilder,private lightservice: LightserviceService) {
    this.addLightForm = this.formBuilder.group({
      // id: 'id',
      color: '',
      state: ''
    });
  }
  
  ngOnInit(): void {
  }
  onSubmit(light:any) {
    
    
    this.lightservice.create(light.color,light.state)



    console.warn(light.color);
  }

}
