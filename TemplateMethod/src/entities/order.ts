class Order {
    public amount: number
    public customerId: string
    public products: string[]
    constructor ({ amount, customerId, products }: IOrder) {
      this.amount = amount
      this.customerId = customerId
      this.products = products
    }
}

interface IOrder {
    customerId: string
    amount: number
    products: string[]
}

export { Order }
