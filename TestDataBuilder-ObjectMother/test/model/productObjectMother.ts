import { ProductDataBuilder } from './productDataBuilder'

class ProductObjectMother {
  static valid () {
    return ProductDataBuilder.aProduct().build()
  }

  static withInvalidId () {
    return ProductDataBuilder.aProduct().withInvalidId().build()
  }

  static withInvalidCategory () {
    return ProductDataBuilder.aProduct().withInvalidCategory().build()
  }

  static withInvalidName () {
    return ProductDataBuilder.aProduct().withInvalidName().build()
  }

  static withInvalidPrice () {
    return ProductDataBuilder.aProduct().withInvalidPrice().build()
  }
}

export { ProductObjectMother }
