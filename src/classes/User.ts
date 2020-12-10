export enum EUserTypes {
  backendadmin = 'backendadmin',
  ceo = 'ceo',
  booker = 'booker',
  employee = 'employee',
  lite = 'lite',
  pool = 'pool',
  superadmin = 'superadmin',
}

export interface IApiUserResponse {
  id: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  sync_id: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  sync_source: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  addressid: string | null;
  active: string; // boolean 0 / 1
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  active_login: string; // boolean 0 / 1
  username: string;
  usertype: EUserTypes;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  auth_key: string;
  number: string;
  email: string;
  title: string;
  firstname: string;
  lastname: string;
  department: string;
  fon1: string;
  fon2: string;
  fon3: string;
  fon4: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_timer_articleid: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_timer_typeid: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_customerid: string;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_approach_articleid: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_approach_timertypeid: string | null;
  comment: string | null;
  lockid: string | null;
  calendaritemaccess: string; // boolean 0 / 1
  lastpasschange: string; // date 0000-00-00 00:00:00
  lastlogin: string; // date 0000-00-00 00:00:00
  modified: string; // date 0000-00-00 00:00:00
  lettertitle: string | null;
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  default_approach_approacharticleid: string;
  erpid?: string;
}

export class User {
  public id: number;
  public syncId?: string;
  public syncSource?: string;
  public addressId?: number;
  public active: boolean; // boolean 0 / 1
  public activeLogin: boolean; // boolean 0 / 1
  public username: string;
  public usertype: EUserTypes;
  public authKey: string;
  public number?: number;
  public email: string;
  public title: string;
  public firstname: string;
  public lastname: string;
  public department?: string;
  public fon1?: string;
  public fon2?: string;
  public fon3?: string;
  public fon4?: string;
  public defaultTimerArticleId: number;
  public defaultTimerTypeId?: number;
  public defaultCustomerId: number;
  public defaultApproachArticleId?: number;
  public defaultApproachTimerTypeId?: number;
  public comment?: string;
  public lockId?: number;
  public calendarItemAccess: boolean; // boolean 0 / 1
  public lastPassChange?: Date; // date 0000-00-00 00:00:00
  public lastLogin?: Date; // date 0000-00-00 00:00:00
  public modified: Date; // date 0000-00-00 00:00:00
  public letterTitle?: string;
  public defaultApproachApproachArticleId?: number;
  public erpId?: string;

  // TODO: add add constructor for not API response
  public constructor(userObject: IApiUserResponse) {
    this.id = Number(userObject.id);
    this.active = Boolean(Number(userObject.active));
    this.activeLogin = Boolean(Number(userObject.active_login));
    this.username = userObject.username;
    this.usertype = userObject.usertype;
    this.authKey = userObject.auth_key;
    this.email = userObject.email;
    this.title = userObject.title;
    this.firstname = userObject.firstname;
    this.lastname = userObject.lastname;
    this.defaultTimerArticleId = Number(userObject.default_timer_articleid);
    this.defaultCustomerId = Number(userObject.default_customerid);
    this.calendarItemAccess = Boolean(Number(userObject.calendaritemaccess));
    this.modified = new Date(userObject.modified);
    
    if (userObject.sync_id) {
      this.syncId = userObject.sync_id;
    }

    if (userObject.sync_source) {
      this.syncSource = userObject.sync_source;
    }

    if (userObject.addressid) {
      this.addressId = Number(userObject.addressid);
    }

    if (userObject.number) {
      this.number = Number(userObject.number);
    }

    if (userObject.department) {
      this.department = userObject.department;
    }

    if (userObject.fon1) {
      this.fon1 = userObject.fon1;
    }

    if (userObject.fon1) {
      this.fon2 = userObject.fon2;
    }

    if (userObject.fon1) {
      this.fon3 = userObject.fon3;
    }

    if (userObject.fon1) {
      this.fon4 = userObject.fon4;
    }

    if (userObject.default_timer_typeid) {
      this.defaultTimerTypeId = Number(userObject.default_timer_typeid);
    }

    if (userObject.default_approach_articleid) {
      this.defaultTimerArticleId = Number(userObject.default_approach_articleid);
    }

    if (userObject.default_approach_timertypeid) {
      this.defaultTimerTypeId = Number(userObject.default_approach_timertypeid);
    }

    if (userObject.comment) {
      this.comment = userObject.comment;
    }

    if (userObject.lockid) {
      this.lockId = Number(userObject.lockid);
    }

    if (!isNaN(Date.parse(userObject.lastpasschange))) {
      this.lastPassChange = new Date(userObject.lastpasschange);
    }

    if (!isNaN(Date.parse(userObject.lastlogin))) {
      this.lastLogin = new Date(userObject.lastlogin);
    }

    if (userObject.lettertitle) {
      this.letterTitle = userObject.lettertitle;
    }

    if (userObject.default_approach_approacharticleid) {
      this.defaultApproachApproachArticleId = Number(userObject.default_approach_approacharticleid);
    }

    if (userObject.erpid) {
      this.erpId = userObject.erpid;
    }
  }
}
