import { Component, OnInit } from '@angular/core';
import { Light } from '../../interfaces/lightinterface'
import { LightserviceService } from '../../services/lightservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  lights : Light[] = []
  constructor(private lightservice: LightserviceService) { 
    
    
    
  }
  ngOnInit(): void {
      
    this.lights=  this.lightservice.get()
    
  }

}
