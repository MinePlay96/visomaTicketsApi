export interface IApiStatusResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Default: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Color: string;
  erpid: null | string | false;
}

export class Status {
  public id: number;
  public title: string;
  public default: boolean;
  public color: string;
  public erpId?: string;

  // TODO: add add constructor for not API response
  public constructor(statusObject: IApiStatusResponse) {
    this.id = Number(statusObject.Id);
    this.title = statusObject.Title;
    this.default = statusObject.Default;
    this.color = statusObject.Color;

    if (statusObject.erpid) {
      this.erpId = statusObject.erpid;
    }
  }
}
