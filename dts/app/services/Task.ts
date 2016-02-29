export class Task {
  summary: string;
  id: number;
  notes: string[];
  scheduled: Date;
  categories: string[];
  constructor(summary: string, id: number) {
    this.summary = summary;
    this.id = id;
  }
}
