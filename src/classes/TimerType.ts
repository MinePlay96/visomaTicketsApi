export enum ETimerTypeType {
  remoteArticle = 1,
  flatRate,
  remoteArticleAndTime,
  extraArticle
}

export interface ITimerTypeArticle {
  id: number;
  articleId: number;
  objectId: number; // id from timerType
  type: string; // TODO: change to enum
  modified: Date;
  params: string; // php serialise
}

export interface ITimerTypeResponse {
  id: string;
  title: string;
  typename: string | null;
  color: string;
  description: string;
  type: string;
  active: string;
  erpid: string | false;
  article: {
    id: string;
    articleid: string;
    objectid: string;
    type: string;
    modified: string;
    params: string;
  } | null;
}

export class TimerType {
  public id: number;
  public title: string;
  public typename?: string;
  public color?: string;
  public description?: string;
  public type?: ETimerTypeType;
  public active: boolean;
  public erpId?: string;
  public article?: ITimerTypeArticle;

  public constructor(timerTypeObject: ITimerTypeResponse) {
    this.id = Number(timerTypeObject.id);
    this.title = timerTypeObject.title;

    if (timerTypeObject.typename) {
      this.typename = timerTypeObject.typename;
    }

    if (timerTypeObject.color) {
      this.color = timerTypeObject.color;
    }

    if (timerTypeObject.description) {
      this.description = timerTypeObject.description;
    }

    if (timerTypeObject.type) {
      this.type = Number(timerTypeObject.type);
    }

    this.active = Boolean(Number(timerTypeObject.active));

    if (timerTypeObject.erpid) {
      this.erpId = timerTypeObject.erpid;
    }

    if (timerTypeObject.article) {
      this.article = {
        articleId: Number(timerTypeObject.article.articleid),
        id: Number(timerTypeObject.article.id),
        modified: new Date(timerTypeObject.article.modified),
        objectId: Number(timerTypeObject.article.objectid),
        params: timerTypeObject.article.params,
        type: timerTypeObject.article.type
      };
    }
  }
}
