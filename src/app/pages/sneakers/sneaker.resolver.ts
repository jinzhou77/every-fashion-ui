import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Sneaker } from 'src/app/modules/models/sneakers.model';
import { SneakersService } from 'src/app/modules/core/services/sneakers.service';
@Injectable({
  providedIn: 'root'
})
export class SneakerResolver implements Resolve<Observable<Sneaker[]>> {
  constructor(private service:SneakersService) {}

  resolve(route:ActivatedRouteSnapshot) {
    return this.service.getSneaker(route.paramMap.get('id')!);
  }
}
