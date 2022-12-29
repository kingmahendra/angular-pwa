import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { GeolocationService } from '../geolocation.service';
import { Coffee } from '../logic/Coffee';
import { PlaceLocation } from '../logic/PlaceLocation';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit, OnDestroy {
  routingSubscription!: Subscription;
  coffee!: Coffee;
  tastingEnabled: boolean = false;
  types = ['Arabica', 'Robusta', 'Excelsa', 'Liberica'];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
     private geolocation: GeolocationService) {}

  ngOnInit(): void {
    this.coffee = new Coffee("", "", new PlaceLocation());
    this.coffee.tastingRating = new TastingRating();
    this.routingSubscription = this.route.params.subscribe((params) => {
      console.log(params['id']);
      if(params['id']) {
        this.data.get(params['id'], (response:Coffee) => {
          this.coffee = response;
          if(response.tastingRating) {
            this.tastingEnabled = true;
          }
        })
      }
    });

    this.geolocation.requestLocation( (location: any) => {
      this.coffee.location.latitude = location.latitude;
      this.coffee.location.longitude = location.longitude;
    })
  }

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      delete this.coffee['tastingRating'];
    }
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

  cancel() {
   this.router.navigate(["/"]);
  }

  save() {
   this.data.save(this.coffee, (result: boolean) => {
    if(result) {
      this.router.navigate(["/"]);
    }
 
   })
  }
}
