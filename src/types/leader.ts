export interface CreateAngryType {
  guage: number;
  writer: string;
}

export interface AngryType extends CreateAngryType {
  id: number;
  create_date: Date;
}
