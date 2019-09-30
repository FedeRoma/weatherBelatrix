import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  nombreCiudad;

  constructor() { }

  ngOnInit() {
  }

  actualizarWeather ($event) {
    // console.log($event);
    this.nombreCiudad = $event;
  }

}
