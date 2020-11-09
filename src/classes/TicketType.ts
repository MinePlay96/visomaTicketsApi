export interface ITicketTypeResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Active: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Description: string | null;
  erpid: string | false;
}

export class TicketType {
  public id: number;
  public active: boolean;
  public title: string;
  public description?: string;
  public erpId?: string;

  public constructor(ticketTypeObject: ITicketTypeResponse) {
    this.id = Number(ticketTypeObject.Id);
    this.active = ticketTypeObject.Active;
    this.title = ticketTypeObject.Title;

    if (ticketTypeObject.Description) {
      this.description = ticketTypeObject.Description;
    }

    if (ticketTypeObject.erpid) {
      this.erpId = ticketTypeObject.erpid;
    }
  }
}