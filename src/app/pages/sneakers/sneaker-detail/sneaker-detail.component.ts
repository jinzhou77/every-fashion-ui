import { SneakersService } from './../../../modules/core/services/sneakers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Sneaker } from 'src/app/modules/models/sneakers.model';
@Component({
  selector: 'app-sneaker-detail',
  templateUrl: './sneaker-detail.component.html',
  styleUrls: ['./sneaker-detail.component.css']
})
export class SneakerDetailComponent implements OnInit {

  sneaker: any;
  items: MenuItem[] = [];
  sneakerDataAvailable: boolean = false
  constructor(
    private route: ActivatedRoute,
    private service: SneakersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.service.getSneaker(param.id)
      .subscribe((res:Sneaker[])=>{
        this.sneaker = res[0]
        this.items = [
          {
            label: 'HOME',
            url: "/"
          },
          {
            label: 'SNEAKERS',
            url: "/sneakers"
          },
          {
            label: this.sneaker.brand_name.toUpperCase(),
            url: "/sneakers/" + this.sneaker.brand_name.toLowerCase().replace(" ","-")
          },
          {
            label: this.sneaker.style_name.toUpperCase(),
            url: "/sneakers/" + this.sneaker.product_id
          }
        ]
        this.sneakerDataAvailable = true
      })
      //Gather StockX Transaction Data Here
      //Gather Ebay Transaction Data Here
    })
  }


}
