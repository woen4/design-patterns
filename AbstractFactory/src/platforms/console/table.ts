import { ITableCompnent } from '../../shared/base/ITableComponent'
import { DataItem } from '../../ui'

class TableConsoleComponent implements ITableCompnent {
  render (data: DataItem[]) {
    console.table(data)
  }
}

export { TableConsoleComponent }
