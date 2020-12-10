export interface IApiTicketResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Number: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SearchTitle: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SearchHtml: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PriorityId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DueOn: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  StatusId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Status: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Duration: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CustomerId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CustomerName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContactId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContactName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContactEMail: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContactTel: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContactMob: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AddressId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Address: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ResponsibleId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ArrangerIds: Array<string>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContractId: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TypeId: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MaincatId: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Subcat1Id: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Subcat2Id: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NewAppointmentSubject: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NewAppointmentLocation: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NewAppointmentBody: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Modified: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Created: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CreatedByName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CreatedById: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LockUserId: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  StatusColor: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AssetId: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Customer: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  erpid: string | null | false;
}

export class Ticket {
  public id: number;
  public number: number;
  public title: string;
  public searchTitle: string;
  public searchHtml: string;
  public sescription: string;
  public priorityId: number;
  public dueOn: Date;
  public statusId: number;
  public status: string;
  public duration?: number;
  public customerId: number;
  public customerName: string;
  public contactId?: number;
  public contactName?: string;
  public contactEMail?: string;
  public contactTel?: string;
  public contactMob?: string;
  public cddressId: number;
  public address: string;
  public responsibleId: number;
  public arrangerIds: Array<number>;
  public contractId?: number;
  public typeId: number;
  public maincatId?: number;
  public subcat1Id?: number;
  public subcat2Id?: number;
  public newAppointmentSubject: string;
  public newAppointmentLocation: string;
  public newAppointmentBody: string;
  public modified: Date;
  public created: Date;
  public createdByName: string;
  public createdById: number;
  public lockUserId?: number;
  public statusColor: string;
  public assetId?: number;
  public erpId?: string;

  public constructor(ticketObject: IApiTicketResponse) {
    this.id = Number(ticketObject.Id);
    this.number = Number(ticketObject.Number);
    this.title = ticketObject.Title;
    this.searchTitle = ticketObject.SearchTitle;
    this.searchHtml = ticketObject.SearchHtml;
    this.sescription = ticketObject.Description;
    this.priorityId = Number(ticketObject.PriorityId);
    this.dueOn = new Date(ticketObject.DueOn);
    this.statusId = Number(ticketObject.StatusId);
    this.status = ticketObject.Status;

    if (ticketObject.Duration) {
      this.duration = Number(ticketObject.Duration);
    }
    this.customerId = Number(ticketObject.CustomerId);
    this.customerName = ticketObject.CustomerName;

    if (ticketObject.ContactId) {
      this.contactId = Number(ticketObject.ContactId);
    }

    if (ticketObject.ContactName) {
      this.contactName = ticketObject.ContactName;
    }

    if (ticketObject.ContactEMail) {
      this.contactEMail = ticketObject.ContactEMail;
    }

    if (ticketObject.ContactTel) {
      this.contactTel = ticketObject.ContactTel;
    }

    if (ticketObject.ContactMob) {
      this.contactMob = ticketObject.ContactMob;
    }
    this.cddressId = Number(ticketObject.AddressId);
    this.address = ticketObject.Address;
    this.responsibleId = Number(ticketObject.ResponsibleId);
    this.arrangerIds = ticketObject.ArrangerIds.map(ele => Number(ele));

    if (ticketObject.ContractId) {
      this.contractId = Number(ticketObject.ContractId);
    }
    this.typeId = Number(ticketObject.TypeId);

    if (ticketObject.MaincatId) {
      this.maincatId = Number(ticketObject.MaincatId);
    }

    if (ticketObject.Subcat1Id) {
      this.subcat1Id = Number(ticketObject.Subcat1Id);
    }

    if (ticketObject.Subcat2Id) {
      this.subcat2Id = Number(ticketObject.Subcat2Id);
    }
    this.newAppointmentSubject = ticketObject.NewAppointmentSubject;
    this.newAppointmentLocation = ticketObject.NewAppointmentLocation;
    this.newAppointmentBody = ticketObject.NewAppointmentBody;
    this.modified = new Date(ticketObject.Modified);
    this.created = new Date(ticketObject.Created);
    this.createdByName = ticketObject.CreatedByName;
    this.createdById = Number(ticketObject.CreatedById);

    if (ticketObject.LockUserId) {
      this.lockUserId = Number(ticketObject.LockUserId);
    }
    this.statusColor = ticketObject.StatusColor;

    if (ticketObject.LockUserId) {
      this.assetId = Number(ticketObject.AssetId);
    }

    if (ticketObject.erpid) {
      this.erpId = ticketObject.erpid;
    }
  }
}

