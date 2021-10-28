class Product {
  public id: string
  public name: string
  public price: number
  public category: string
  constructor ({ id, name, price, category }: ProductParams) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }
}

export { Product }

export interface ProductParams {
  id: string
  name: string
  price: number
  category: string
}
