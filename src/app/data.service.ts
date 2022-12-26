import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation'
import { TastingRating } from './logic/TastingRating';

@Injectable()
export class DataService {
  constructor() { }
  
  getList(callback: any) {
     // TODO: Change it with real Web service
   const list = [
     new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation('123 Market Street', 'San Francisco')),
     new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation('Gran Via 34', "Madrid"))
   ]
   callback(list)
  }

  save( coffee: Coffee, callback: any) {
    // TODO: Change it with real Web service
    callback(true);
  }

}
