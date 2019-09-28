import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-city',
  templateUrl: './set-city.component.html',
  styleUrls: ['./set-city.component.css']
})
export class SetCityComponent implements OnInit {
  @Output() nombreCiudad = new EventEmitter<string>();

  arrayCiudades = [{name: 'Bogota', code: 'bogota'}, {name: 'Buenos Aires', code: 'Buenos Aires'}, {name: 'Lima', code: 'lima'}];
  constructor() { }

  ngOnInit() {
  }

  updateShowWeather (ciudad) {
    console.log(ciudad);
    this.nombreCiudad.emit(ciudad);
  }

}
