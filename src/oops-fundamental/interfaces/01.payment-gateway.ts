interface PaymentGateway{
    initializePayment(amount:number): void;
}

class StripePayment implements PaymentGateway {
    initializePayment(amount:number):void{
        console.log(`Processing Stripe Payement amount of `, amount)
    }
}

class RazorpayPayment implements PaymentGateway {
    initializePayment(amount:number):void{
        console.log(`Processing Stripe Payement amount of Rs`, amount)
    }
}


// Here's where the real payoff happens. Instead of having CheckoutService depend on StripePayment or RazorpayPayment, it depends on the PaymentGateway interface. It doesn't know or care which implementation it's using.

class CheckoutService {
    private paymentGateway: PaymentGateway

    // This pattern is called dependency injection: instead of creating its own dependencies, the class receives them from the outside. And it only works because the dependency is typed as an interface, not a concrete class.
    constructor(paymentGateway:PaymentGateway){
        this.paymentGateway = paymentGateway
    }

    setPaymentGateway(paymentGateway:PaymentGateway){
        this.paymentGateway = paymentGateway
    }

    checkout(amount:number){
        this.paymentGateway.initializePayment(amount)
    }
}


function main():void{
    const stripeGateway: PaymentGateway = new StripePayment()

    const service = new CheckoutService(stripeGateway)

    service.checkout(120.12)

    const razorpayGateway: PaymentGateway = new RazorpayPayment()

    service.setPaymentGateway(razorpayGateway)

    service.checkout(120.12*80)
}

main()