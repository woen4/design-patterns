import { OrderBusiness } from './business/orderBusiness'
import { Order } from './entities/order'

const orderBusiness = new OrderBusiness()

orderBusiness.create(
  new Order({ amount: 100, customerId: '123', products: ['apple', 'pear'] })
)
