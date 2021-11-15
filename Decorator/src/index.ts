import Http, { IncomingMessage, ServerResponse } from 'http'
import { InjectHttpDecorator } from './agent'
InjectHttpDecorator()
const PORT = 3333

const handler = (req: IncomingMessage, res: ServerResponse) => {
  res.write('Decorator pattern')
  res.end()
}

const server = Http.createServer(handler)

server.listen(PORT, () => { console.log('Server is running...') })
