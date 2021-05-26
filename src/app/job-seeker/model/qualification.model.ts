export class QualificationModel {
  // tslint:disable-next-line:variable-name
  u_id: number;
  id: number;
  qualificationType: number;
  value: string;
  // tslint:disable-next-line:variable-name
  constructor(value: string, qualificationType: number, u_id: number, id: number) {
    this.value = value;
    this.qualificationType = qualificationType;
    this.u_id = u_id;
    this.id = id;
  }
}
