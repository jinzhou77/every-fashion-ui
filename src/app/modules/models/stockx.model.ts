import { Deserializable } from "src/app/shared/interfaces/deserializable.interface";

export class Stockx implements Deserializable{
  trade_id: string;
  trade_name: string;
  ticker: string;
  trade_date_time: string;
  trade_size: string;
  trade_average_price: string;
  trade_high_price: string;
  trade_low_price: string;
  number_of_sold: string;

  constructor(stockx: any={}) {
    this.trade_id= stockx.trade_id;
    this.trade_name = stockx.trade_name;
    this.ticker = stockx.ticker;
    this.trade_date_time = stockx.trade_date_time;
    this.trade_size = stockx.trade_size;
    this.trade_average_price = stockx.trade_average_price;
    this.trade_high_price = stockx.trade_high_price;
    this.trade_low_price = stockx.trade_low_price;
    this.number_of_sold = stockx.number_of_sold;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
