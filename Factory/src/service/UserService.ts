import { User } from '../models/User'
import { UserRepository } from '../repository/UserRepository'

class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor ({ userRepository }) {
    this.userRepository = userRepository
  }

  async find (query: string): Promise<User[]> {
    const users = await this.userRepository.find(query)
    return users.map(user => ({ ...user, name: user.name.toUpperCase() }))
  }
}

interface UserServiceConstructorParams {
  userRepository: UserRepository;
}

interface IUserService {
  find(query: string): Promise<User[]>
}

export { UserService }
