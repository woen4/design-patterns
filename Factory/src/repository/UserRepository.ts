// eslint-disable-next-line no-unused-vars
import { Database } from '../utils/Database'

interface UserRepositoryConstructorParams {
  dbConnection: Database
}

class UserRepository {
  private dbConnection: Database
  constructor ({ dbConnection }: UserRepositoryConstructorParams) {
    this.dbConnection = dbConnection
  }

  async find (query) {
    this.dbConnection.find(query)
  }
}

export { UserRepository }
