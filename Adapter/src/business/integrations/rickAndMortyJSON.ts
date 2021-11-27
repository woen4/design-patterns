import axios from 'axios'
import { Character } from '../../entities/character'

const URL = 'https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.json'

class RickAndMortyUSA {
  async getCharactersFromJSON (): Promise<Character[]> {
    const { data: { results = [] } } = await axios.get(URL)
    return results as Character[]
  }
}

export { RickAndMortyUSA }
