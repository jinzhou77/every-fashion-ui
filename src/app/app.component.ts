import { Component } from '@angular/core';
import { SneakersService } from './modules/core/services/sneakers.service';
import { Sneaker } from './modules/models/sneakers.model';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sneakData-Frontend'
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
