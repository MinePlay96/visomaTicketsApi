export enum EContractQuotaType {
  time,
  money
}

export enum EContractOrderType {
  days,
  months,
  years
}

export interface IContractResponse {
  id: string;
  customerid: string;
  title: string;
  start: string;
  end: string;
  period: string;
  orderinterval: string;
  ordertype: string;
  type: string;
  active: string;
  overbookable: string;
  quotatonextperiod: string;
  quota: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  quota_invoice: string;
  quotatype: string;
  lockid: string;
  quotaid: string;
  lastquotarefresh: string;
  modified: string;
  startat: string;
}

export class Contract {
  public id: number;
  public customerId: number;
  public title: string;
  public start: Date;
  public end: Date;
  public period: number;
  public orderInterval: number;
  public orderType: EContractQuotaType;
  public type: number;
  public active: boolean;
  public overBookable: boolean;
  public quotaToNextPeriod: boolean;
  public quota: number;
  public quotaType: EContractQuotaType;
  public lockid?: number;
  public quotaId: number;
  public lastQuotaRefresh?: Date;
  public modified: Date;
  public startAt: number;

  public constructor(contractObject: IContractResponse) {
    this.id = Number(contractObject.id);
    this.customerId = Number(contractObject.customerid);
    this.title = contractObject.title;
    this.start = new Date(contractObject.start);
    this.end = new Date(contractObject.end);
    this.period = Number(contractObject.period);
    this.orderInterval = Number(contractObject.orderinterval);
    this.orderType = Number(contractObject.ordertype);
    this.type = Number(contractObject.type);
    this.active = Boolean(Number(contractObject.active));
    this.overBookable = Boolean(Number(contractObject.overbookable));
    this.quotaToNextPeriod = Boolean(Number(contractObject.quotatonextperiod));
    this.quota = Number(contractObject.quota);
    this.quotaType = Number(contractObject.quotatype);

    if (Number(contractObject.lockid)) {
      this.lockid = Number(contractObject.lockid);
    }

    this.quotaId = Number(contractObject.quotaid);

    if (contractObject.lastquotarefresh && contractObject.lastquotarefresh !== '0000-00-00') {
      this.lastQuotaRefresh = new Date(contractObject.lastquotarefresh);
    }

    this.modified = new Date(contractObject.modified);
    this.startAt = Number(contractObject.startat);
  }
}
