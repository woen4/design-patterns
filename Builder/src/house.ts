import { IWall } from './walls'

export type Window = 'matte' | 'transparent' | 'blurred';
export type Door = 'glass' | 'wood';

export class House {
  public walls: IWall[] = [];
  public windows: Window[] = [];
  public doors: Door[] = [];
  public garage?: boolean;
  public pool?: boolean;
}
