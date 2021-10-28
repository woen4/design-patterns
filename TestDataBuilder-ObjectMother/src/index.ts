import { Product } from './entities/product'

const productValidator = (product: Product) => {
  const errors = []

  if (product.id.length < 2 || product.id.length > 20) {
    errors.push('invalid id')
  }

  if (product.name.match(/\W+|\d+/gm)) {
    errors.push('invalid name')
  }

  if (!['eletronic', 'organic'].includes(product.category)) {
    errors.push('invalid category')
  }

  if (product.price <= 0 || product.price > 1000) {
    errors.push('invalid price')
  }

  return {
    result: errors.length === 0,
    errors
  }
}

/*
  id: between 2 and 20 characters
  name: should be only words
  price: should be from zero to a thousand
  category: should be eletronic or organic
*/

export { productValidator }
