import { IViewFactory } from '../../shared/base/IViewFactory'
import { TableBrowserComponent } from './table'

class BrowserFactory implements IViewFactory {
  createTable () {
    return new TableBrowserComponent()
  }
}

export default BrowserFactory
