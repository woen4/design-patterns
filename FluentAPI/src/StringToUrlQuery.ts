class StringToUrlQuery {
  private content: string
  constructor (content: string) {
    this.content = content
  }

  removeWhiteSpaces () {
    this.content = this.content.trim()
    return this
  }

  removeDiacritics () {
    this.content = this.content.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return this
  }

  inLowerCase () {
    this.content = this.content.toLowerCase()
    return this
  }

  toUrlFormat () {
    this.content = this.content.replace(/\s+/gm, '+')
    return this
  }
}

export { StringToUrlQuery }
