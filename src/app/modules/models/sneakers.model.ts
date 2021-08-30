import { Deserializable } from "src/app/shared/interfaces/deserializable.interface";

export class Sneaker implements Deserializable{
  productId: string;
  brand : string;
  category : string;
  shoe : string;
  colorway : string;
  gender : string;
  imageUrl : string;
  thumbUrl : string;
  releaseDate : string;
  belowRetail : boolean;
  retailPrice : number;
  styleId : string;
  tickerSymbol: string;
  urlKey : string;
  title : string;
  marketAnnualHigh : number;
  marketAnnualLow : number;
  marketSalesLast72Hours : number;
  marketLowestAsk : number;
  marketLowestAskSize : string;
  marketHighestBid : number;
  marketHighestBidSize : string;

  constructor(sneaker: any = {}) {
    this.productId = sneaker.productId;
    this.brand = sneaker.brand || '';
    this.category = sneaker.category || '';
    this.shoe = sneaker.shoe || '';
    this.colorway = sneaker.colorway || '';
    this.gender = sneaker.gender || '';
    this.imageUrl = sneaker.imageUrl || '';
    this.thumbUrl = sneaker.thumbUrl || '';
    this.releaseDate = sneaker.releaseDate || '';
    this.belowRetail = sneaker.belowRetail || false;
    this.retailPrice = sneaker.retailPrice;
    this.styleId = sneaker.styleId || '';
    this.tickerSymbol = sneaker.tickerSymbol || '';
    this.urlKey = sneaker.urlKey || '';
    this.title = sneaker.title || '';
    this.marketAnnualHigh = sneaker.marketAnnualHigh;
    this.marketAnnualLow = sneaker.marketAnnualLow;
    this.marketSalesLast72Hours = sneaker.marketSalesLast72Hours;
    this.marketLowestAsk = sneaker.marketLowestAsk;
    this.marketLowestAskSize = sneaker.marketLowestAskSize || '';
    this.marketHighestBid = sneaker.marketHighestBid;
    this.marketHighestBidSize = sneaker.marketHighestBidSize || '';
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
