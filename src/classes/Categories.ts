export enum ECategoriesTypes {
  ciitem = 'ciitem',
  texttemplate = 'texttemplate',
  ticket = 'ticket',
  tradegroup = 'tradegroup',
  branch = 'branch',
  interests = 'interests',
}

export interface IApiCategoriesResponse {
  id: string;
  parentid: string;
  sort: string;
  title: string;
  shortdesc: string;
  desc: string;
  type: ECategoriesTypes;
  active: string;
  erpid: false | string;
}

export class Categories {
  public id: number;
  public parentid: number;
  public sort: number;
  public title: string;
  public shortdesc: string;
  public desc: string;
  public type: ECategoriesTypes;
  public active: boolean;
  public erpId?: string;

  // TODO: add add constructor for not API response
  public constructor(tradeGroupObject: IApiCategoriesResponse) {
    this.id = Number(tradeGroupObject.id);
    this.parentid = Number(tradeGroupObject.parentid);
    this.sort = Number(tradeGroupObject.sort);
    this.shortdesc = tradeGroupObject.shortdesc;
    this.desc = tradeGroupObject.desc;
    this.type = tradeGroupObject.type;
    this.title = tradeGroupObject.title;
    this.active = Boolean(Number(tradeGroupObject.active));

    if (tradeGroupObject.erpid) {
      this.erpId = tradeGroupObject.erpid;
    }
  }
}
