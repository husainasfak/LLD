// simple enum
enum OrderStatus {
    PLACED = "PLACED",
    CONFIRMED = "CONFIRMED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}

// enum with associated values
// The constructor is used to assign specific values to each enum constant. Since enum constants are objects, the constructor initializes the value field when each constant is created.
class PaymentMethod {
    static readonly CREDIT_CARD = new PaymentMethod("Credit Card", 2.5);
    static readonly DEBIT_CARD = new PaymentMethod("Debit Card", 1.0);
    static readonly UPI = new PaymentMethod("UPI", 0.0);
    static readonly NET_BANKING = new PaymentMethod("Net Banking", 1.5);

    private constructor(
        public readonly displayName: string,
        public readonly feePercent: number
    ) {}
}



class PurchaseOrder {
    private status: OrderStatus;

    constructor(
        private readonly orderId: string,
        private readonly paymentMethod: PaymentMethod,
        private readonly amount: number
    ) {
        this.status = OrderStatus.PLACED;
    }

    advanceStatus(): boolean {
        const transitions: Partial<Record<OrderStatus, OrderStatus>> = {
            [OrderStatus.PLACED]: OrderStatus.CONFIRMED,
            [OrderStatus.CONFIRMED]: OrderStatus.SHIPPED,
            [OrderStatus.SHIPPED]: OrderStatus.DELIVERED,
        };
        const next = transitions[this.status];
        if (next) {
            this.status = next;
            return true;
        }
        return false;
    }

    cancel(): boolean {
        if (this.status === OrderStatus.PLACED || this.status === OrderStatus.CONFIRMED) {
            this.status = OrderStatus.CANCELLED;
            return true;
        }
        return false;
    }

    getTotalWithFees(): number {
        return this.amount + (this.amount * this.paymentMethod.feePercent / 100);
    }

    displayInfo(): void {
        console.log(
            `Order ${this.orderId} | Status: ${this.status} | ` +
            `Payment: ${this.paymentMethod.displayName} | ` +
            `Amount: $${this.amount.toFixed(2)} (with fees: $${this.getTotalWithFees().toFixed(2)})`
        );
    }
}

// Usage
const order1 = new PurchaseOrder("ORD-001", PaymentMethod.CREDIT_CARD, 99.99);
order1.displayInfo();

order1.advanceStatus(); // PLACED -> CONFIRMED
order1.advanceStatus(); // CONFIRMED -> SHIPPED
order1.advanceStatus(); // CONFIRMED -> SHIPPED
order1.displayInfo();

console.log(`Cancel after shipping: ${order1.cancel()}`); // false