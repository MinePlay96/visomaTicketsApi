export interface IAddressResponse {
  id: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  sync_id: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  sync_source: string | null;
  customerid: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_employeeid: string | null;
  active: string;
  address: string;
  city: string;
  zipcode: string;
  countryid: string;
  fon1: string;
  fon2: string | null;
  fon3: string | null;
  fon4: string | null;
  email: string;
  comment: string;
  lockid: string | null;
  modified: string;
}

export class Address {
  public id: number;
  public syncId?: string;
  public syncSource?: string;
  public customerId: number;
  public defaultEmployeeId?: number;
  public active: boolean;
  public address: string;
  public city: string;
  public zipcode: string;
  public countryId: number;
  public fon1?: string;
  public fon2?: string;
  public fon3?: string;
  public fon4?: string;
  public email: string;
  public comment?: string;
  public lockId?: number;
  public modified: Date;

  public constructor(addressObject: IAddressResponse) {
    this.id = Number(addressObject.id);
    this.customerId = Number(addressObject.customerid);
    this.active = Boolean(Number(addressObject.active));
    this.address = addressObject.address;
    this.city = addressObject.city;
    this.zipcode = addressObject.zipcode;
    this.countryId = Number(addressObject.countryid);
    this.modified = new Date(addressObject.modified);
    this.fon1 = addressObject.fon1;

    if (addressObject.sync_id) {
      this.syncId = addressObject.sync_id;
    }

    if (addressObject.sync_source) {
      this.syncSource = addressObject.sync_source;
    }

    if (addressObject.default_employeeid) {
      this.defaultEmployeeId = Number(addressObject.default_employeeid);
    }

    if (addressObject.fon2) {
      this.fon2 = addressObject.fon2;
    }

    if (addressObject.fon3) {
      this.fon3 = addressObject.fon3;
    }

    if (addressObject.fon4) {
      this.fon4 = addressObject.fon4;
    }

    this.email = addressObject.email;

    if (addressObject.lockid) {
      this.lockId = Number(addressObject.lockid);
    }

  }
}
