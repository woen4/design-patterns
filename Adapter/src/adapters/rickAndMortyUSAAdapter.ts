import { RickAndMortyUSA } from '../business/integrations/rickAndMortyJSON'
import { Character } from '../entities/character'

class RickAndMortyUSAAdapter {
  static async getCharacters (): Promise<Character[]> {
    return await new RickAndMortyUSA().getCharactersFromJSON()
  }
}

export { RickAndMortyUSAAdapter }
