import { Component, OnInit, Input } from '@angular/core';
import { Sneaker } from 'src/app/modules/models/sneakers.model';

export interface Size {
  label: string,
  value: string
}

@Component({
  selector: 'app-sneaker-detail-overview',
  templateUrl: './sneaker-detail-overview.component.html',
  styleUrls: ['./sneaker-detail-overview.component.css']
})
export class SneakerDetailOverviewComponent implements OnInit {

  @Input() sneaker!: Sneaker

  sizes: Size[] = [{label:'All', value: 'all'}]
  selectedCityCode: string="";
  constructor() {
    for(let i=1;i<21;i++) {
      this.sizes.push({
        label: i.toString(),
        value: i.toString()
      })
    }
  }

  ngOnInit(): void {
  }

}
