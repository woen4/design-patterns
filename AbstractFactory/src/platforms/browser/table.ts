import { ITableCompnent } from '../../shared/base/ITableComponent'

class TableBrowserComponent implements ITableCompnent {
  render (data: any) {
    window.alert('TableConsoleComponent')
  }
}

export { TableBrowserComponent }
