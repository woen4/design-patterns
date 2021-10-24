import { UserRepository } from '../repository/UserRepository'
import { UserService } from '../service/UserService'
import Database from '../utils/Database'

class UserFactory {
  static async createInstance () {
    const db = new Database({ connectionString: 'mongodb://localhost' })
    const dbConnection = await db.connect()
    const userRepository = new UserRepository({ dbConnection })
    const userService = new UserService({ userRepository })

    return userService
  }
}

export { UserFactory }
