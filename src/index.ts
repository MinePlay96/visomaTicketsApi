import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class API {
  private _AxiosInstance: AxiosInstance;

  public constructor(url: string, token: string)
  public constructor(url: string, username: string, password: string)
  public constructor(url: string, tokenOrUsername: string, password?: string) {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: `${url}/api2/`
    };

    if (password) {
      axiosConfig.headers = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        X_VSM_PASSWORD: password,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        X_VSM_USERNAME: tokenOrUsername
      };
    } else {
      axiosConfig.params = {
        token: tokenOrUsername
      };
    }

    this._AxiosInstance = Axios.create(axiosConfig);
  }

  // TODO: change to object with all classes
  public async connect(): Promise<boolean> {
    return this._checkAuth();
  }

  private async _checkAuth(): Promise<boolean> {
    // TODO: change to checkAuth api method
    return this._AxiosInstance.get('ticketsmobilesettings/search/')
      .then(() => true)
      .catch(() => false);
  }
}
