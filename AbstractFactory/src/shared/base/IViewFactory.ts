import { ITableCompnent } from './ITableComponent'

export interface IViewFactory {
  createTable(): ITableCompnent
}
