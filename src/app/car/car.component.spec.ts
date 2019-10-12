import {CarComponent} from './car.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarService } from './car.service';
import { Observable } from 'rxjs';


describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component : CarComponent;

  beforeEach(() => {
TestBed.configureTestingModule({
  declarations: [CarComponent]//реєстрація компонента
});
  });

  it('should create component instance', () => {//перевіряємо чи компонент створений
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag with title`, () => {
   const fixture = TestBed.createComponent(CarComponent);
   fixture.detectChanges();// для того щоб ангуляр примінив зміни компонента в шаблон
   const component = fixture.debugElement.nativeElement;// nativeElement - DOM
   const text = component.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });
////////////////////////////////////////////////////////////////////////////////////
//Тестування сервісів

it('should inject CarService', () =>{
const fixture = TestBed.createComponent(CarComponent);
const component = fixture.debugElement.componentInstance;
const carService = fixture.debugElement.injector.get(CarService);//перевіряємо чи ми інжектимо CarService до CarComponent
fixture.detectChanges();
expect(component.isCarVisible).toEqual(carService.getVisibility());

});

//Test Async
// it(`shouldn't get car name if not async`, () => {
//   spyOn(CarService, 'getCarName').and.returnValue(Observable.of('TestCar').delay(100));
//   fixture.detectChanges();
//   fixture.whenStable().then(() => {
//     expect(component.carName).toEqual('TestCar');
//   })
// })

});