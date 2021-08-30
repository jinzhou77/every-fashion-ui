import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockx } from '../../models/stockx.model'

@Injectable({
  providedIn: 'root'
})
export class SneakerTradesService {
  stockx_url = "http://localhost:8080/api/trades/"
  constructor(
    private http: HttpClient,
  ) { }

  getStockxTrades(): Observable<Stockx[]> {
    return this.http.get<Stockx[]>(this.stockx_url);
  }
}
