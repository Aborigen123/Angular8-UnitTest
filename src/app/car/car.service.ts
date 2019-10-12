import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx'


//@Injectable()

export class CarService{
private isVisible = true;

showCar(){
    this.isVisible = true;
}

hideCar(){
    this.isVisible = false;
}

getVisibility(){
    return this.isVisible;
}

getCarName(): Observable<String>{
return Observable.of('Ford').delay(100);
}

}