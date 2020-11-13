// TODO: evaluate

export enum EStreamItemType {
  default = 'default',
  report = 'report',
  timer = 'timer',
  product = 'product',
  comment = 'comment',
  action = 'action',
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  modelhistory_insert = 'modelhistory_insert',
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  modelhistory_update = 'modelhistory_update',
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  mail_outbound = 'mail_outbound',
  fullreport = 'fullreport',
  checklist = 'checklist',
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  modelhistory_delete = 'modelhistory_delete'
}

export enum EStreamItemobjectClass {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ticket = 'Ticket',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Document = 'Document',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Timer = 'Timer',
  object2Ticket = 'object2Ticket',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Customer = 'Customer',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Message = 'Message',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TicketController = 'TicketController'
}

export interface IStreamItemResponse {
  id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  sync_id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  sync_source: 'centron-ticket' | '';
  userid: string;
  ticketid: string;
  customerid: string;
  type: EStreamItemType;
  objectclass: EStreamItemobjectClass | null;
  objectid: string | null;
  title: string;
  content: string;
  time: string;
}

export class StreamItem {
  public id: number;
  public syncId?: string;
  public syncSource?: string;
  public userId: number;
  public ticketId?: number;
  public customerNumber?: string;
  public type: EStreamItemType;
  public objectClass?: EStreamItemobjectClass;
  public objectId?: number;
  public title: string;
  public content: string;
  public time: Date;

  public constructor(streamItemObject: IStreamItemResponse) {
    this.id = Number(streamItemObject.id);

    if (streamItemObject.sync_id) {
      this.syncId = streamItemObject.sync_id;
    }

    if (streamItemObject.sync_source) {
      this.syncSource = streamItemObject.sync_source;
    }

    this.userId = Number(streamItemObject.userid);

    if (streamItemObject.ticketid) {
      this.ticketId = Number(streamItemObject.ticketid);
    }

    if (streamItemObject.customerid && streamItemObject.customerid !== '0') {
      this.customerNumber = streamItemObject.customerid;
    }

    this.type = streamItemObject.type;

    if (streamItemObject.objectclass) {
      this.objectClass = streamItemObject.objectclass;
    }

    if (streamItemObject.objectid) {
      this.objectId = Number(streamItemObject.objectid);
    }

    this.title = streamItemObject.title;
    this.content = streamItemObject.content;
    this.time = new Date(streamItemObject.time);
  }
}
