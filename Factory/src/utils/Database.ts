export interface IDatabase {
  connect(): any;
  find(query: string): {};
}

class Database implements IDatabase {
  private connectionString: string

  constructor ({ connectionString }) {
    this.connectionString = connectionString
  }

  async connect () {
    await this.sleep(500)
  }

  async find (query: string) {
    await this.sleep(500)
    return [{ name: 'kaio woen' }]
  }

  private async sleep (ms: number) {
    // eslint-disable-next-line promise/param-names
    return new Promise(f => setTimeout(f, ms))
  }
}

export { Database }
