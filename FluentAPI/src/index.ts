import { StringToUrlQuery } from './StringToUrlQuery'

const stringToProccess = '  śtRing Tô quéry '

const instance = new StringToUrlQuery(stringToProccess)

const urlQuery = instance
  .inLowerCase()
  .removeDiacritics()
  .removeWhiteSpaces()
  .toUrlFormat()

console.log(urlQuery)
