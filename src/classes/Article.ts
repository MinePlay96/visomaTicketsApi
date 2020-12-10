import { Categories, IApiCategoriesResponse } from './Categories';

export interface IApiArticleResponse {
  id: string;
  title: string;
  description: string;
  price: string;
  multiplier: string;
  unitid: string;
  units: string;
  ean: string;
  sku: string;
  active: string;
  showprice: string;
  reducecontract: string;
  tradegroups: Array<IApiCategoriesResponse>;
  erpid: false | string;
}

export class Article {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public multiplier: number;
  public unitid: number;
  public units: number;
  public ean: string;
  public sku: string;
  public active: boolean;
  public showprice: boolean;
  public reducecontract: boolean;
  public tradegroups: Array<Categories>;
  public erpId?: string;

  public constructor(articleObject: IApiArticleResponse) {
    this.id = Number(articleObject.id);
    this.title = articleObject.title;
    this.description = articleObject.description;
    this.price = Number(articleObject.price);
    this.multiplier = Number(articleObject.multiplier);
    this.unitid = Number(articleObject.unitid);
    this.units = Number(articleObject.units);
    this.ean = articleObject.ean;
    this.sku = articleObject.sku;
    this.active = Boolean(Number(articleObject.active));
    this.showprice = Boolean(Number(articleObject.showprice));
    this.reducecontract = Boolean(Number(articleObject.reducecontract));
    this.tradegroups = articleObject.tradegroups.map(ele => new Categories(ele));

    if (articleObject.erpid) {
      this.erpId = articleObject.erpid;
    }
  }
}
