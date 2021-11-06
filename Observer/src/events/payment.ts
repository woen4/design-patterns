import { PaymentSubject } from '../subjects/paymentSubject'

class Payment {
    private paymentSubject: PaymentSubject
    constructor (paymentSubject: PaymentSubject) {
      this.paymentSubject = paymentSubject
    }

    payWithCreditCard () {
      console.log('Payment made with credit card!')
      this.paymentSubject.notify({ at: new Date() })
    }
}

export { Payment }
