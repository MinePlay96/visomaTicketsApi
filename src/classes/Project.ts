export interface IProjectResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Id: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Title: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Archived: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Duration: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Begin: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Deadline: string; // wrong format day.month.year
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ProjectmanagerIds: [
    string
  ];
  erpid: string | false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TicketIds: [
    string
  ];
}

export class Project {
  public id: number;
  public title: string;
  public description?: string;
  public archived: boolean;
  public duration?: number;
  public begin: Date;
  public deadLine: Date;
  public projectmanagerIds: Array<number>;
  public erpId?: string;
  public ticketIds: Array<number>;

  public constructor(projectObject: IProjectResponse) {
    this.id = Number(projectObject.Id);
    this.title = projectObject.Title;

    if (projectObject.Description) {
      this.description = projectObject.Description;
    }
    this.archived = Boolean(Number(projectObject.Archived));

    if (projectObject.Duration) {
      this.duration = Number(projectObject.Duration);
    }

    this.begin = new Date(projectObject.Begin.split('.').reverse()
      .join('.'));
    this.deadLine = new Date(projectObject.Deadline.split('.').reverse()
      .join('.'));
    this.projectmanagerIds = projectObject.ProjectmanagerIds.map(ele => Number(ele));

    if (projectObject.erpid) {
      this.erpId = projectObject.erpid;
    }

    this.ticketIds = projectObject.TicketIds.map(ele => Number(ele));
  }
}
