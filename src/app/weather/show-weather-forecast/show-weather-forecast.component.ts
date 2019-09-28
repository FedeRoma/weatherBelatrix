import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: "app-show-weather-forecast",
  templateUrl: "./show-weather-forecast.component.html",
  styleUrls: ["./show-weather-forecast.component.css"]
})
export class ShowWeatherForecastComponent implements OnInit, OnChanges {
  @Input() nombreCiudad: string;
  @Input() dias: number;
  clima;
  forecast;

  constructor(private rest: RestService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    console.log("Cambio la ciudad", this.nombreCiudad);
    if (this.nombreCiudad) {
      this.obtenerClimaForecast();
    }
  }

  /**
   * Funcion que obtiene el clima con el nombre de la ciudad
   */
  async obtenerClimaForecast() {
    try {
      this.clima = await this.rest
        .obtenerClimaCiudadForecast(this.nombreCiudad, this.dias)
        .toPromise();
      console.log("Data Forecast: " + JSON.stringify(this.clima));
      this.forecast = this.clima.forecast.forecastday;
      console.log(this.forecast)
    } catch (error) {
      // console.log(error);
    }
  }
}
