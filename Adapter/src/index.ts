import { RickAndMortyBRLAdapter } from './adapters/rickAndMortyBRLAdapter'
import { RickAndMortyUSAAdapter } from './adapters/rickAndMortyUSAAdapter'
import { Character } from './entities/character'

const data = [RickAndMortyBRLAdapter, RickAndMortyUSAAdapter].map(
  (integration) => integration.getCharacters()
)
async function execute () {
  const all = await Promise.allSettled(data)

  const success = all
    .filter(({ status }) => status === 'fulfilled')
    .map((result) => (result as PromiseFulfilledResult<Character[]>).value)
    .reduce((prev, next) => prev.concat(next), [])

  const errors = all
    .filter(({ status }) => status === 'rejected')

  console.table(success)
  console.table(errors)
}

execute()
