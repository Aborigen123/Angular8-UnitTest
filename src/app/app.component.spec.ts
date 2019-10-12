import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);// створюємо екземпляр класу і получаємо деякі обєкти
    const app = fixture.debugElement.componentInstance;// дістаємо інстанс(сутність самого компонента)
    expect(app).toBeTruthy(); //очікуємо що компонент app існує 
  });

  it(`should have as title 'ng2-course-theoryBlock12'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app-works');//перевіряємо чи title = app-works
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app-works');
  });
});
