import rewiremock from 'rewiremock'

import { UserFactory } from '../src/factory/UserFactory'

const dbData = [{ name: 'kaio' }, { name: 'woen' }]

jest.mock('./../src/utils/Database', () => {
  return class Database {
    async connect () {
      return this
    }

    async find (query) {
      return dbData
    }
  }
})

describe('User factory', () => {
  it('should return the mocked users', async () => {
    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find('name: Kaio')
    expect(result).toEqual([{ name: 'KAIO' }, { name: 'WOEN' }])
  })
})
