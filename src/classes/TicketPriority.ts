export interface ITicketPriorityResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Active: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PrioId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Default: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Color: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WorkDayBegin: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WorkDayEnd: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ReactionTime: string;
  erpid: string | false;
}

export class TicketPriority {
  public id: number;
  public active: boolean;
  public prioId: number;
  public title: string;
  public default: boolean;
  public color: string;
  public workDayBegin: string;
  public workDayEnd: string;
  public reactionTime: number;
  public erpId?: string;

  public constructor(ticketPriorityObject: ITicketPriorityResponse) {
    this.id = Number(ticketPriorityObject.Id);
    this.active = ticketPriorityObject.Active;
    this.prioId = Number(ticketPriorityObject.PrioId);
    this.title = ticketPriorityObject.Title;
    this.default = ticketPriorityObject.Default;
    this.color = ticketPriorityObject.Color;
    this.workDayBegin = ticketPriorityObject.WorkDayBegin;
    this.workDayEnd = ticketPriorityObject.WorkDayEnd;
    this.reactionTime = Number(ticketPriorityObject.ReactionTime);

    if (ticketPriorityObject.erpid) {
      this.erpId = ticketPriorityObject.erpid;
    }
  }
}
