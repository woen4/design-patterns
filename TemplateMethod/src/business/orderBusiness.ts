import { Order } from '../entities/order'
import { BaseBusiness } from './base/baseBusiness'

class OrderBusiness extends BaseBusiness {
    private order: Set<Order> = new Set<Order>(); // Only a logic for order creation

    protected _validateFields (order: Order) {
      return order.amount > 1 && order.products.length > 0
    }

    protected _create (order: Order) {
      this.order.add(order)
      console.log('Order created')
    }
}

export { OrderBusiness }
