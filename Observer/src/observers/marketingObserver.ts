import { PaymentSubject } from '../subjects/paymentSubject'

class MarketingObserver {
  constructor (paymentSubject: PaymentSubject) {
    paymentSubject.subscribe({ update: this.onPayment })
  }

  onPayment (data) {
    console.log('The marketing team was notified of the payment')
  }
}

export { MarketingObserver }
