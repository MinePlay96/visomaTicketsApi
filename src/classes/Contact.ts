import { User, IApiUserResponse } from './User';

export enum EContactTypes {
  webuser = 'webuser',
  webuseradmin = 'webuseradmin',
  contact = 'contact',
}

export interface IContactResponse extends Omit<IApiUserResponse, 'usertype'> {
  usertype: EContactTypes;
}

export class Contact extends User {}
