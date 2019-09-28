import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SetCityComponent } from './weather/set-city/set-city.component';
import { ShowWeatherComponent } from './weather/show-weather/show-weather.component';
import { ShowWeatherForecastComponent } from './weather/show-weather-forecast/show-weather-forecast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SetCityComponent,
    ShowWeatherComponent,
    ShowWeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
