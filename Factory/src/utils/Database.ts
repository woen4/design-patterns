export interface IDatabase {
  connect(): Promise<IDatabase>;
  find(query: string): Promise<any[]>;
}

class Database implements IDatabase {
  private connectionString: string

  constructor ({ connectionString }) {
    this.connectionString = connectionString
  }

  async connect () {
    await this.sleep(500)
    return this
  }

  async find (_query: string) {
    await this.sleep(500)
    return [{ name: 'kaio woen' }]
  }

  private async sleep (ms: number) {
    // eslint-disable-next-line promise/param-names
    return new Promise(f => setTimeout(f, ms))
  }
}

export default Database
