import { ProductParams, Product } from '../../src/entities/product'

class ProductDataBuilder {
  private productData: ProductParams
  constructor () {
    this.productData = {
      id: '001',
      name: 'computer',
      price: 1000,
      category: 'eletronic'
    }
  }

  static aProduct () {
    return new ProductDataBuilder()
  }

  withInvalidId () {
    this.productData.id = '1'
    return this
  }

  withInvalidCategory () {
    this.productData.category = 'Invalid category'
    return this
  }

  withInvalidName () {
    this.productData.name = '[invalid }name999'
    return this
  }

  withInvalidPrice () {
    this.productData.price = -100
    return this
  }

  build () {
    const product = new Product(this.productData)
    return product
  }
}

export { ProductDataBuilder }
