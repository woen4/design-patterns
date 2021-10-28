import { productValidator } from '../src/index'
import { ProductObjectMother } from './model/productObjectMother'

describe('Test data builder', () => {
  it('shouldn\'t return error with valid product ', () => {
    const product = ProductObjectMother.valid()

    const validationResult = productValidator(product)
    const expected = {
      errors: [],
      result: true
    }
    expect(validationResult).toEqual(expected)
  })

  describe('Product validation rules', () => {
    it('should return a object error when creating a Product with invalid id', () => {
      const product = ProductObjectMother.withInvalidId()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid id'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid name', () => {
      const product = ProductObjectMother.withInvalidName()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid name'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid price ', () => {
      const product = ProductObjectMother.withInvalidPrice()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid price'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
    it('should return a object error when creating a Product with invalid category', () => {
      const product = ProductObjectMother.withInvalidCategory()

      const validationResult = productValidator(product)
      const expected = {
        errors: ['invalid category'],
        result: false
      }
      expect(validationResult).toEqual(expected)
    })
  })
})
