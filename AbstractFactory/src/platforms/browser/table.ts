import { ITableCompnent } from '../../shared/base/ITableComponent'
import { DataItem } from '../../ui'

class TableBrowserComponent implements ITableCompnent {
  private data: DataItem[];

  render (data: DataItem[]) {
    this.data = data
    const table = this.mountTable()
    console.log(table)
  }

  mountTable () {
    return `<table>
                <thead>
                  ${this.getTableHeader()}
                </thead>
                <tbody>
                  ${this.getTableBody()}
                </tbody>
            </table>`
  }

  getTableBody () {
    return this.data
      .map((item) => Object.values(item))
      .map((item) => item.map((value) => `<td>${value}</td>`))
      .map((row) => `<tr>${row}</tr>`)
  }

  getTableHeader () {
    const firstItem = this.data[0]
    const tHeaders = Object.keys(firstItem).map(
      (key) => `<th scope="col">${key}</th>`
    )
    return `<tr>${tHeaders}</tr>`
  }
}

export { TableBrowserComponent }
