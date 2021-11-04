import { IStrategy } from '../base/contextStrategy'
import knex, { Knex } from 'knex'

class PostgresStrategy implements IStrategy {
    private connectionString: string
    private dbInstance: Knex<any, unknown[]>
    private tableName: string

    constructor (connectionString: string, tableName: string) {
      this.connectionString = connectionString
      this.tableName = tableName
      this.connect()
    }

    private connect () {
      this.dbInstance = knex({
        client: 'pg',
        connection: this.connectionString
      })
    }

    public async create (item: object) {
      return await this.dbInstance.insert(item).into(this.tableName)
    }

    async read () {
      return await this.dbInstance.select('*').from(this.tableName)
    }

    async update (item: object, filter: object) {
      return await this.dbInstance.update(item).into(this.tableName).where(filter)
    }

    async delete (filter: object) {
      return await this.dbInstance.delete().into(this.tableName).where(filter)
    }
}

export { PostgresStrategy }
