import { Light } from './../../interfaces/lightinterface';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LightserviceService } from '../../services/lightservice.service'
import { Router } from '@angular/router';




@Component({
  selector: 'app-lightcreate',
  templateUrl: './lightcreate.component.html',
  styleUrls: ['./lightcreate.component.sass']
})
export class LightcreateComponent implements OnInit {


  @Input() light: Light

  addLightForm:FormGroup;
  
  
  
  constructor( 
    private formBuilder: FormBuilder,
    private lightservice: LightserviceService,
    private router:Router,
    ) {
    this.addLightForm = this.formBuilder.group({
      // id: 'id',
      color: '',
      state: ''
    });
  }
  
  ngOnInit(): void {
  }
  onSubmit(light:any) {
    if (this.light){
      this.light.color = light.color
      this.lightservice.update(this.light)
    }else{
      
      this.lightservice.create(light.color,light.state)
      this.router.navigate([''])
    }
    



    console.warn(light.color);
  }
 

}
