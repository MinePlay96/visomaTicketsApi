export enum ETimerStatus {
  running = 1,
  unknown,
  open,
  closed,
  ghostwriterd,
  billed,
}

// {
//   "Id": "1636",
//   "TicketId": "0",
//   "ArticleId": "0",
//   "Article": "-",
//   "TypeId": null,
//   "UserId": "82",
//   "User": "Leon Strauß",
//   "Start": "2020-11-09 22:14:27",
//   "Stop": "2020-11-09 22:14:27",
//   "Description": "Via tickets gestartet und noch nicht beendet.",
//   "InternalNotice": null,
//   "Scheduled": false,
//   "Billable": true,
//   "Closed": false,
//   "Approach": false,
//   "Modified": "2020-11-09 22:14:27",
//   "Status": 1,
//   "erpid": false
// }

export interface ITimerResponse {
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  TicketId: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  ArticleId: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Article: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  TypeId: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  UserId: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  User: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Start: string; // Date
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Stop: string; // Date
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Description: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  InternalNotice: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Scheduled: boolean;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Billable: boolean;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Closed: boolean;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Approach: boolean;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Modified: string; // Date
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  Status: string; // number
  erpid: string | false;
}

export class Timer {
  public id: number;
  public ticketId?: number;
  public articleId?: number;
  public articleName?: string;
  public typeId?: number;
  public userId: number;
  public userText: string;
  public start: Date;
  public stop: Date;
  public description: string;
  public internalNotice?: string;
  public scheduled: boolean;
  public billable: boolean;
  public closed: boolean;
  public approach: boolean;
  public modified: Date;
  public status: ETimerStatus; // TODO: change to enum
  public erpId?: string;

  public constructor(timerObject: ITimerResponse) {
    this.id = Number(timerObject.Id);

    if (Number(timerObject.TicketId)) {
      this.ticketId = Number(timerObject.TicketId);
    }

    if (Number(timerObject.ArticleId)) {
      this.articleId = Number(timerObject.ArticleId);
    }

    if (timerObject.Article && timerObject.Article !== '-') {
      this.articleName = timerObject.Article;
    }

    if (timerObject.TypeId) {
      this.typeId = Number(timerObject.TypeId);
    }

    this.userId = Number(timerObject.UserId);
    this.userText = timerObject.User;
    this.start = new Date(timerObject.Start);
    this.stop = new Date(timerObject.Stop);
    this.description = timerObject.Description;

    if (timerObject.InternalNotice) {
      this.internalNotice = timerObject.InternalNotice;
    }

    this.scheduled = timerObject.Scheduled;
    this.billable = timerObject.Billable;
    this.closed = timerObject.Closed;
    this.approach = timerObject.Approach;
    this.modified = new Date(timerObject.Modified);

    this.status = Number(timerObject.Status);

    if (timerObject.erpid) {
      this.erpId = timerObject.erpid;
    }
  }
}
