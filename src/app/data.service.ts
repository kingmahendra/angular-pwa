import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation'
import { TastingRating } from './logic/TastingRating';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  public endpoint = "http://localhost:3000";
  
  get(coffeeId: string, callback: any) {
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`).subscribe(
      response => {
        callback(response);
      }
    )
  }
  getList(callback: any) {
   
  //  const list = [
  //    new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation('123 Market Street', 'San Francisco')),
  //    new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation('Gran Via 34', "Madrid"))
  //  ]
  // callback(list)

   this.http.get(`${this.endpoint}/coffees`).subscribe(
    response => {
      console.log(response)
      callback(response);
    }
   )

  }

  save( coffee: any, callback: any) {
    if(coffee._id){
       this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee).subscribe
       (response => {
        callback(true)
       })
    }else {
      this.http.post(`${this.endpoint}/coffees`, coffee).subscribe
      (response => {
       callback(true)
      })
    }
   
  }

}
