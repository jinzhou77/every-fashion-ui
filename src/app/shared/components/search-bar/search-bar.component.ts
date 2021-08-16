import { Component, OnInit } from '@angular/core';
import { SneakersService } from 'src/app/modules/core/services/sneakers.service';
import { Sneaker } from 'src/app/modules/models/sneakers.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [SneakersService]
})
export class SearchBarComponent implements OnInit {

  sneakers: Sneaker[];
  selectedSneakerAdvanced: any[];
  filterSneakers: any[];

  constructor(
    private sneakersService: SneakersService,
  ) {
    this.sneakers = []
    this.selectedSneakerAdvanced = []
    this.filterSneakers = []
  }

  ngOnInit(): void {
    this.sneakersService.getSneakers()
    .subscribe((res: Sneaker[]) => {
      this.sneakers = res;
    })
  }

  filterSneaker(event: any) {
    let filtered: Sneaker[] = [];
    let query = event.query;
    for (let i = 0; i < this.sneakers.length; i++) {
      let sneaker = this.sneakers[i];
      if (sneaker.style_name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(sneaker);
      }
    }

    this.filterSneakers = filtered;
  }

}
