import { RickAndMortyBRL } from '../business/integrations/rickAndMortyXML'
import { Character } from '../entities/character'

class RickAndMortyBRLAdapter {
  static async getCharacters (): Promise<Character[]> {
    return await new RickAndMortyBRL().getCharactersFromXML()
  }
}

export { RickAndMortyBRLAdapter }
