import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [MessageService]
})
export class DropdownComponent implements OnInit {
  items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {
    this.items = []
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [
      {
          label: 'Sneakers',
          items: [
            {
              label: 'Nike',
              // icon: 'pi pi-external-link',
              url: 'http://angular.io'
            },
            {
              label: 'Adidas',
              // icon: 'pi pi-external-link',
              url: 'http://angular.io'
            },
            {
              label: 'Yeezy',
              // icon: 'pi pi-external-link',
              url: 'http://angular.io'
            },
            {
              label: 'Air Jordan',
              // icon: 'pi pi-external-link',
              url: 'http://angular.io'
            },
          ]
      }
    ];
  }

}
