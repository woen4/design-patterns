import { ITableCompnent } from '../../shared/base/ITableComponent'

class TableConsoleComponent implements ITableCompnent {
  render (data: any) {
    console.log('TableConsoleComponent')
  }
}

export { TableConsoleComponent }
