export enum EObject2TicketTypes {
  arranger = 'arranger',
  seenby = 'seenby'
}

export interface IObject2TicketResponse {
  id: string;
  ticketid: string;
  objectid: string;
  type: EObject2TicketTypes;
  modified: string;
  params: string | null;
}

export class Object2Ticket {
  public id: number;
  public ticketId: number;
  public objectId?: string;
  public type: EObject2TicketTypes;
  public modified: Date;
  public params?: string; // TODO: add unserilice for JS

  public constructor(object2TicketObject: IObject2TicketResponse) {
    this.id = Number(object2TicketObject.id);
    this.ticketId = Number(object2TicketObject.ticketid);
    this.type = object2TicketObject.type;
    this.modified = new Date(object2TicketObject.modified);

    if (object2TicketObject.objectid) {
      this.objectId = object2TicketObject.objectid;
    }

    if (object2TicketObject.params) {
      this.params = object2TicketObject.params;
    }
  }
}
