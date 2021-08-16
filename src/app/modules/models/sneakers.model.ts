import { Deserializable } from "src/app/shared/interfaces/deserializable.interface";

export class Sneaker implements Deserializable{
  product_id: string;
  url: string;
  brand_name: string;
  style_name: string;
  number_sales_72_hours: number;
  ticker: string;
  image_path: string;
  release_date: string;
  retail_price: string;
  style_code: string;
  colorway: string;
  number_sales_12_months: number;
  price_premium: string;
  average_sales_price: string;

  constructor(sneaker: any = {}) {
    this.product_id = sneaker.id;
    this.url = sneaker.name || '';
    this.brand_name = sneaker.brand_name || '';
    this.style_name = sneaker.style_name || '';
    this.number_sales_72_hours = sneaker.number_sales_72_hours || 0;
    this.ticker = sneaker.ticker || '';
    this.image_path = sneaker.image_path || '';
    this.release_date = sneaker.release_date || '';
    this.retail_price = sneaker.retail_price;
    this.style_code = sneaker.style_code;
    this.colorway = sneaker.colorway;
    this.number_sales_12_months = sneaker.number_sales_12_months;
    this.price_premium = sneaker.price_premium;
    this.average_sales_price = sneaker.average_sales_price;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
