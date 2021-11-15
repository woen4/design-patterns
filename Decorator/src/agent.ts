import Http, { IncomingMessage, ServerResponse } from 'http'

const InjectHttpDecorator = () => {
  const oldEmit = Http.Server.prototype.emit

  Http.Server.prototype.emit = function (...args) {
    const [type, _req, response] = args as [string, IncomingMessage, ServerResponse]

    if (type === 'request') {
      response.setHeader('X-Instrumented-By', 'Kaio woen')
    }
    return oldEmit.apply(this, args)
  }
}

export { InjectHttpDecorator }
