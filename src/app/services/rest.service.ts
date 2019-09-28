import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private httpOptionsGeneral = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }

  obtenerClimaCiudad(ciudad) {
    return this.http.get("http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=" + ciudad)
      .pipe(map(this.extractData));
  }

  obtenerClimaCiudadForecast(ciudad, dias) {
    return this.http.get("http://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&q=" + ciudad + "&days=" + dias)
      .pipe(map(this.extractData));
  }


}
