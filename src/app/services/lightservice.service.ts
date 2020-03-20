import { Injectable } from '@angular/core';
import { Light } from '../interfaces/lightinterface'

@Injectable({
  providedIn: 'root'
})
export class LightserviceService {

  lights: Light[]= []

  constructor() { 
    for (let i = 0; i < 8; i++) {
      const array1 = [true, false]
      const randomState = array1[Math.floor(Math.random() * array1.length)];
      
      const randomColor =  "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
       
      this.lights.push({
        
        id : i,
        color : randomColor,
        state : randomState
      }) 

      }
  }
  get(){
    // console.log(this.lights);
    return this.lights
  }
  create( color: string="grey",state: boolean= true): Light{
    this.lights.sort(
      (a: Light,b: Light)=>{
        return b.id - a.id
      }
      );
      console.log(this.lights);

    
    var light = {
      id : this.lights[0].id + 1 ,
      color : color ,
      state : state
      
    }
    this.lights.unshift(light)
    return light
    
  }
}
