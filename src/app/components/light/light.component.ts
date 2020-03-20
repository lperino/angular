import { Component, OnInit , Input} from '@angular/core';
import { Light } from 'src/app/interfaces/lightinterface';





@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.sass']
})
export class LightComponent implements OnInit {
  
  
  @Input() light: Light ;
         
        
  
  
  constructor() {
        
   }

  ngOnInit(): void {
  }

}
