export class ExampleRecord {
  constructor(record = {}) {
    this._record = record;

    this.id = record.id;
  }

  get formattedId() {
    return this.id + 1;
  }
}
