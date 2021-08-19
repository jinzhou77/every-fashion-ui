import { SneakerResolver } from './sneaker.resolver';
import { SneakerDetailComponent } from './sneaker-detail/sneaker-detail.component';
import { JordanComponent } from './jordan/jordan.component';
import { YeezyComponent } from './yeezy/yeezy.component';
import { AdidasComponent } from './adidas/adidas.component';
import { NikeComponent } from './nike/nike.component';
import { SneakersComponent } from './sneakers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SneakersComponent},
  { path: 'nike', component: NikeComponent},
  { path: 'adidas', component: AdidasComponent},
  { path: 'yeezy', component: YeezyComponent},
  { path: 'jordan', component: JordanComponent},
  { path: ':id', component: SneakerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SneakersRoutingModule { }
