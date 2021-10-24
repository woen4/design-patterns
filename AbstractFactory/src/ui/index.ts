import { ITableCompnent } from '../shared/base/ITableComponent'
import { IViewFactory } from '../shared/base/IViewFactory'
import { database } from '../shared/data'

export interface DataItem {
  balance: string;
  age: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

class Application {
  private table: ITableCompnent
  constructor (factory: IViewFactory) {
    this.table = factory.createTable()
  }

  initialize (database: DataItem[]) {
    this.table.render(database)
  }
}

(async () => {
  const path = globalThis.window ? 'browser' : 'console'
  const { default: Factory } = await import(`../platforms/${path}`)
  const app = new Application(new Factory())
  app.initialize(database)
})()
