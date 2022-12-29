import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GeolocationService } from './geolocation.service';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'coffee',
    component: CoffeeComponent,
  },
  {
    path: 'coffee/:id',
    component: CoffeeComponent,
  },
];

@NgModule({
  declarations: [AppComponent, ListComponent, CoffeeComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
