import { BrickWall, GlassWall, WoodWall } from './walls'
import { HouseBuilder } from './houseBuilder'

const brickWall = new BrickWall(1, 1, 1)
const glassWall = new GlassWall(2, 2, 2)
const woodWall = new WoodWall(3, 3, 3)

const house = new HouseBuilder()
  .buildWall(brickWall)
  .buildWall(glassWall)
  .buildWall(woodWall)
  .buildWindows(2, 'blurred')
  .buildWindows(1, 'matte')
  .buildDoors(1, 'glass')
  .buildDoors(2, 'wood')
  .buildGarage()
  .buildPool()
  .getResult()

console.log(house)
