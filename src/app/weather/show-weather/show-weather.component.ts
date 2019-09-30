import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { RestService } from "src/app/services/rest.service";

@Component({
  selector: "app-show-weather",
  templateUrl: "./show-weather.component.html",
  styleUrls: ["./show-weather.component.css"]
})
export class ShowWeatherComponent implements OnInit, OnChanges {
  @Input() nombreCiudad: string;
  clima;

  constructor(private rest: RestService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    // console.log("Cambio la ciudad", this.nombreCiudad);
    if (this.nombreCiudad) {
      this.obtenerClima();
    }
  }

  /**
   * Funcion que obtiene el clima con el nombre de la ciudad
   */
  async obtenerClima() {
    try {
      this.clima = await this.rest
        .obtenerClimaCiudad(this.nombreCiudad)
        .toPromise();
      // console.log("Data: " + JSON.stringify(this.clima));
    } catch (error) {
      // console.log(error);
    }
  }
}
