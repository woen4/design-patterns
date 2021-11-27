import axios from 'axios'
import { Character } from '../../entities/character'
import { parseStringPromise, Options } from 'xml2js'

const URL = 'https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.xml'

class RickAndMortyBRL {
  async getCharactersFromXML (): Promise<Character[]> {
    const { data } = await axios.get(URL)
    const parserOptions: Options = {
      explicitRoot: false,
      explicitArray: false
    }
    const { results: { element: results = [] } } = await parseStringPromise(data, parserOptions)
    return Array.isArray(results) ? results : [results] as Character[]
  }
}

export { RickAndMortyBRL }
