interface IContactCustomerRespnse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Default: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FullName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  EMail: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fon: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fax: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Mobile: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Selected: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AddressId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WebuserDefault: boolean;
}

interface IAddressCustomerResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Default: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FullAddress: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Street: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  City: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Zip: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Contacts: Array<IContactCustomerRespnse>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Selected: boolean;
}

interface ITicketCustomerResponse {
  text: string;
  title: string;
  data: string;
  link: string;
  tags: string;
  type: string;
  shtml: string;
  number: string;
  id: string;
}

interface IContractCustomerRespnse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PriorityId: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Stammblatts: null;
}

interface IAssetCustomerResponse {
  id: string;
  uid: string | null;
  customerid: string;
  catid: string | null;
  name: string;
  description: string;
  additionalparams: string;
  lockid: string| null;
  modified: string;
  Id: string;
  Title: string;
}

export interface ICustomerResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Number: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SearchName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  EMail: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fon: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Fax: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FormatedTicketInfo: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TicketInfoPopup: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TicketInfo: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Addresses: Array<IAddressCustomerResponse> | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Contacts: Array<IContactCustomerRespnse> | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Technician1: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Technician1Id: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Technician2: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Technician2Id: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CurrentTickets: Array<ITicketCustomerResponse> | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IndoorServiceUser: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  OutdoorServiceUser: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NotifyTicketCreate: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DefaultTicketResponsibleId: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Selected: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  erpid: string | false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DefaultBillable: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Contracts: Array<IContractCustomerRespnse> | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Assets: Array<IAssetCustomerResponse> | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Stammblatt: string | null;
}

export class Customer {
  public id: number;
  public number: string;
  public name: string;
  public email?: string;
  public fon?: string;
  public fax?: string;
  public ticketInfoPopup: boolean;
  public ticketInfo?: string;
  public addresses: Array<number>;
  public contacts: Array<number>;
  public technician1?: number;
  public technician2?: number;
  public currentTickets: Array<number>;
  public notifyTicketCreate: boolean;
  public defaultTicketResponsibleId?: number;
  public erpId?: string;
  public defaultBillable: boolean;
  public contracts: Array<number>;
  public assets: Array<number>;

  public constructor(customerObject: ICustomerResponse) {
    this.id = Number(customerObject.Id);
    this.number = customerObject.Number;
    this.name = customerObject.Name;
    this.ticketInfoPopup = Boolean(Number(customerObject.TicketInfoPopup));
    this.notifyTicketCreate = customerObject.NotifyTicketCreate;
    this.defaultBillable = customerObject.DefaultBillable;
    this.addresses = (customerObject.Addresses ?? []).map(ele => Number(ele.Id));
    this.contacts = (customerObject.Contacts ?? []).map(ele => Number(ele.Id));
    this.currentTickets = (customerObject.CurrentTickets ?? []).map(ele => Number(ele.Id));
    this.contracts = (customerObject.Contracts ?? []).map(ele => Number(ele.Id));
    this.assets = (customerObject.Assets ?? []).map(ele => Number(ele.Id));

    if (customerObject.EMail) {
      this.email = customerObject.EMail;
    }

    if (customerObject.Fon) {
      this.fon = customerObject.Fon;
    }

    if (customerObject.TicketInfo) {
      this.ticketInfo = customerObject.TicketInfo;
    }

    if (customerObject.Fax) {
      this.fax = customerObject.Fax;
    }

    if (customerObject.Technician1Id) {
      this.technician1 = Number(customerObject.Technician1Id);
    }

    if (customerObject.Technician2Id) {
      this.technician2 = Number(customerObject.Technician2Id);
    }

    if (customerObject.DefaultTicketResponsibleId) {
      // eslint-disable-next-line id-length
      this.defaultTicketResponsibleId = Number(customerObject.DefaultTicketResponsibleId);
    }

    if (customerObject.erpid) {
      this.erpId = customerObject.erpid;
    }
  }
}
