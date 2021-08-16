import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sneaker } from '../../models/sneakers.model';
@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  sneakers_URL = "http://localhost:8080/api/sneakers/"
  sneakers_popularity_URL = "http://localhost:8080/api/sneakers/?popularity=true"
  most_recent_released_URL = "http://localhost:8080/api/sneakers/?recent_release=true"
  nike_URL = "http://localhost:8080/api/sneakers/?brand=nike"
  jordan_URL = "http://localhost:8080/api/sneakers/?brand=Air-Jordan"
  adidas_URL = "http://localhost:8080/api/sneakers/?brand=adidas"

  constructor(
    private http: HttpClient
  ) { }

  getSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.sneakers_URL)
  }

  getMostPopularSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.sneakers_popularity_URL)
  }

  getMostRecentReleasedSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.most_recent_released_URL)
  }

  getNikeSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.nike_URL)
  }

  getJordanSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.jordan_URL)
  }

  getAdidasSneakers(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.adidas_URL)
  }
}
