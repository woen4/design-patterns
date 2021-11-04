import { Collection, MongoClient } from 'mongodb'
import { IStrategy } from '../base/contextStrategy'

class MongoStrategy implements IStrategy {
  private dbInstance: Collection
  constructor (connectionString: string, dbName: string, collection: string) {
    this.setup(connectionString, dbName, collection)
  }

  public async setup (connectionString: string, dbName: string, collection: string) {
    const client = new MongoClient(connectionString)
    await client.connect()
    this.dbInstance = client.db(dbName).collection(collection)
    console.log(this.dbInstance)
  }

  async create (item: object) {
    await this.dbInstance.insertOne(item)
  }

  async read (filter: object) {
    return [await this.dbInstance.findOne(filter)]
  }

  async update (filter: object, item: object) {
    await this.dbInstance.updateOne(filter, item)
  }

  async delete (filter: object) {
    await this.dbInstance.deleteOne(filter)
  }
}

export { MongoStrategy }
