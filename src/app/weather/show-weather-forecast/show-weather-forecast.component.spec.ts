import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherForecastComponent } from './show-weather-forecast.component';

describe('ShowWeatherForecastComponent', () => {
  let component: ShowWeatherForecastComponent;
  let fixture: ComponentFixture<ShowWeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWeatherForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
