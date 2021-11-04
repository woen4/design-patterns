export interface IStrategy {
  create(item: object): void
  read(filter: object): Promise<object[]>
  update(item: object, filter: object): void
  delete(filter: object): void
}

class ContextStrategy implements IStrategy {
  private dbStrategy: IStrategy;

  constructor (dbStrategy: IStrategy) {
    this.dbStrategy = dbStrategy
  }

  public async create (item: object) {
    this.dbStrategy.create(item)
  }

  public async read (filter: object) {
    return this.dbStrategy.read(filter)
  }

  public async update (item: object, filter: object) {
    this.dbStrategy.update(item, filter)
  }

  public async delete (filter: object) {
    this.delete(filter)
  }
}

export { ContextStrategy }
