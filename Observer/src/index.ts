import { PaymentSubject } from './subjects/paymentSubject'
import { MarketingObserver } from './observers/marketingObserver'
import { Payment } from './events/payment'

const paymentSubject = new PaymentSubject()
const payment = new Payment(paymentSubject)

const marketingObserver = new MarketingObserver(paymentSubject)

payment.payWithCreditCard()
