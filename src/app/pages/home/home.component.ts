import { SneakersService } from './../../modules/core/services/sneakers.service';
import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/modules/models/sneakers.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SneakersService]
})
export class HomeComponent implements OnInit {
  popularDataAvailable: boolean = false
  recentDataAvailable: boolean = false
  brands:any[] = ['yeezy', 'nike', 'air-jordan', 'adidas'];
  mostPopular: Sneaker[] = [];
  mostRecent: Sneaker[] = [];
  constructor(private sneakersService:SneakersService) {}

  ngOnInit(): void {
    this.sneakersService.getMostPopularSneakers()
    .subscribe((res: Sneaker[]) => {
      this.mostPopular = res;
      this.popularDataAvailable = true
    })

    this.sneakersService.getMostRecentReleasedSneakers()
    .subscribe((res: Sneaker[]) => {
      this.mostRecent = res;
      this.recentDataAvailable = true
    })
  }

}
