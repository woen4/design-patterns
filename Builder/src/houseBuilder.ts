import { Door, House, Window } from './house'
import { IWall } from './walls'

export class HouseBuilder {
  private house: House = new House();

  buildWall (wall: IWall) {
    this.house.walls.push(wall)
    return this
  }

  buildWindows (quantity: number, windowStyle: Window) {
    for (let i = 0; i < quantity; i++) {
      this.house.windows.push(windowStyle)
    }
    return this
  }

  buildDoors (quantity: number, doorStyle: Door) {
    for (let i = 0; i < quantity; i++) {
      this.house.doors.push(doorStyle)
    }
    return this
  }

  buildGarage () {
    this.house.garage = true
    return this
  }

  buildPool () {
    this.house.pool = true
    return this
  }

  getResult () {
    return this.house
  }
}
