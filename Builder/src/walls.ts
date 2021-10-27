export type WallMaterial = 'wood' | 'glass' | 'brick'

class Wall implements IWall {
  public height: number
  public width: number
  public thickness: number
  public material: WallMaterial

  constructor (material: WallMaterial, height: number, width: number, thickness: number) {
    this.height = height
    this.width = width
    this.thickness = thickness
    this.material = material
  }
}

class WoodWall extends Wall {
  constructor (height: number, width: number, thickness: number) {
    super('wood', height, width, thickness)
  }
}

class GlassWall extends Wall {
  constructor (height: number, width: number, thickness: number) {
    super('glass', height, width, thickness)
  }
}

class BrickWall extends Wall {
  constructor (height: number, width: number, thickness: number) {
    super('brick', height, width, thickness)
  }
}

export interface IWall {
  material: WallMaterial
  height: number
  width: number
  thickness: number
}

export { WoodWall, GlassWall, BrickWall }
