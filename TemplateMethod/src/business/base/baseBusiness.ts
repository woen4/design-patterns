abstract class BaseBusiness {
  protected _validateFields (_data: any): boolean {
    throw new Error('Not implemented method: ' + this._validateFields.name)
  }

  protected _create (_data: any) {
    throw new Error('Not implemented method: ' + this._create.name)
  }

  create (data: any) {
    const isValid = this._validateFields(data)
    if (!isValid) throw new Error('Invalid data')
    this._create(data)
  }
}

export { BaseBusiness }
