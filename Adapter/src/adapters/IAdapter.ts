import { Character } from '../entities/character'

export interface IAdapter {
    getCharacters(): Promise<Character[]>
}
