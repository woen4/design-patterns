interface Subscription {
    update(data: any): void
}

class PaymentSubject {
    private subscriptions = new Set<Subscription>()
    notify (data) {
      this.subscriptions.forEach(sub => sub.update(data))
    }

    subscribe (listener: Subscription) {
      this.subscriptions.add(listener)
    }

    unsubscribe (listener: Subscription) {
      this.subscriptions.delete(listener)
    }
}

export { PaymentSubject }
