import { IDatabase } from '../utils/Database'
import { User } from '../models/User'

class UserRepository implements IUserRepository {
  private dbConnection: IDatabase
  constructor ({ dbConnection }: UserRepositoryConstructorParams) {
    this.dbConnection = dbConnection
  }

  async find (query: string): Promise<User[]> {
    return await this.dbConnection.find(query)
  }
}

interface UserRepositoryConstructorParams {
  dbConnection: IDatabase
}

export interface IUserRepository {
  find(query: string): Promise<User[]>;
}

export { UserRepository }
