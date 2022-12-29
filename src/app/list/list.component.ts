import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GeolocationService } from '../geolocation.service';
import { Coffee } from '../logic/Coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list!: [Coffee];
  constructor(private data: DataService, private router: Router, private geolocation: GeolocationService) { }

  ngOnInit(): void {
    this.data.getList((list:[Coffee])=> {
      this.list = list;
    })
  }

  goDetails(coffee: Coffee) {
    this.router.navigate(['/coffee',coffee._id])
  }

  toMap(coffee: Coffee) {
    const mapUrl = this.geolocation.getMapLink(coffee.location);
    location.href= mapUrl;

  }

  share(coffee: Coffee) {
    const shareText = `I had coffee ${coffee.name} and give rating ${coffee.rating} to it.`;
    if('share' in navigator) {
      navigator.share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(()=> console.log('shared')).catch(()=> console.log('error sharing'));
    } else {
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareUrl;
    }

  }

}
