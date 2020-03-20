import { LightserviceService } from './../../services/lightservice.service';
import { LightcreateComponent } from './../../pages/lightcreate/lightcreate.component';
import { Component, OnInit , Input} from '@angular/core';
import { Light } from 'src/app/interfaces/lightinterface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.sass']
})
export class LightComponent implements OnInit {
  
  
  @Input() light: Light ;
         
        
  
  
  constructor(private modalService: NgbModal,private lightService: LightserviceService) {
        
   }

  ngOnInit(): void {
  }
  openEditModal(){
    var modal = this.modalService.open(LightcreateComponent);
    modal.componentInstance.light = this.light
   
  }
  onClickLight(){
    this.light.state = !this.light.state
    this.lightService.update(this.light)
  }

}
