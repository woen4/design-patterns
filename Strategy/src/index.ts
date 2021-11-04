import { ContextStrategy } from './base/contextStrategy'
import { MongoStrategy } from './strategies/mongoStrategy'
import { PostgresStrategy } from './strategies/postgresStrategy'

(async () => {
  const postgresStrategy = new ContextStrategy(new PostgresStrategy('postgres://docker:docker@localhost:5432/strategy-pattern-db', 'users'))
  const mongoStrategy = new ContextStrategy(new MongoStrategy('mongodb://localhost:27017', 'strategy-pattern-db', 'users'))

  const contextTypes = { transaction: postgresStrategy, activitylog: mongoStrategy }

  type DataItem = {name: string, type: keyof typeof contextTypes}

  const data: DataItem[] = [{ name: 'kaio', type: 'transaction' }, { name: 'woen', type: 'activitylog' }]

  data.forEach(({ name, type }) => {
    const context = contextTypes[type]
    context.create({ name })
  })
})()
