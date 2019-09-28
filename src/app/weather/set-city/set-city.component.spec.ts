import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCityComponent } from './set-city.component';

describe('SetCityComponent', () => {
  let component: SetCityComponent;
  let fixture: ComponentFixture<SetCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
