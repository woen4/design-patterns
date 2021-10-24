import { IViewFactory } from '../../shared/base/IViewFactory'
import { TableConsoleComponent } from './table'

class ConsoleFactory implements IViewFactory {
  createTable () {
    return new TableConsoleComponent()
  }
}

export default ConsoleFactory
