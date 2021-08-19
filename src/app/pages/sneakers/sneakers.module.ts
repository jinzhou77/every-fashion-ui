import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SneakersRoutingModule } from './sneakers-routing.module';
import { SneakersComponent } from './sneakers.component';
import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { YeezyComponent } from './yeezy/yeezy.component';
import { JordanComponent } from './jordan/jordan.component';
import { SneakerDetailComponent } from './sneaker-detail/sneaker-detail.component';

@NgModule({
  declarations: [
    SneakersComponent,
    NikeComponent,
    AdidasComponent,
    YeezyComponent,
    JordanComponent,
    SneakerDetailComponent
  ],
  imports: [
    SneakersRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class SneakersModule { }
