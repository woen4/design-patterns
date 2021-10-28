import { productValidator } from '../src/index'
import { ProductDataBuilder } from './model/productDataBuilder'

describe('Test data builder', () => {
  it('shouldn\'t return error with valid product ', () => {
    const product = ProductDataBuilder.aProduct().build()

    const validationResult = productValidator(product)
    const expected = {
      errors: [],
      result: true
    }
    expect(validationResult).toEqual(expected)
  })

  describe('Product validation rules', () => {
    it('should return a object error when creating a Product with invalid id', () => {
      const product = ProductDataBuilder.aProduct().withInvalidId().build()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid id'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid name', () => {
      const product = ProductDataBuilder.aProduct().withInvalidName().build()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid name'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid price ', () => {
      const product = ProductDataBuilder.aProduct().withInvalidPrice().build()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid price'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid category', () => {
      const product = ProductDataBuilder.aProduct().withInvalidCategory().build()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid category'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
  })
})
