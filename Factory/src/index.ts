import { UserFactory } from './factory/UserFactory'

(async () => {
  const userFactory = await UserFactory.createInstance()
  const result = await userFactory.find('name: Kaio')

  console.log(result)
})()
