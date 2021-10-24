import { ITableCompnent } from '../../shared/base/ITableComponent'

class TableConsoleComponent implements ITableCompnent {
  render (data: DataItem[]) {
    console.table(data)
  }
}

export { TableConsoleComponent }
