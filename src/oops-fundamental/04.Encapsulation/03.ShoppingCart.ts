class ShoppingCart {
    private items: Map<string, number> = new Map();
    private discountApplied: boolean = false;
    private isCheckedOut: boolean = false;

    addItem(name: string, price: number): void {
        // Add item to cart, but reject if already checked out
        if(!this.checkout){
            this.items.set(name,price)
        }
    }

    applyDiscount(code: string): boolean {
        // If code is "SAVE10" and no discount applied yet and not checked out,
        // mark discount as applied and return true. Otherwise return false.
        if(!this.discountApplied && code === 'SAVE10' && !this.isCheckedOut){
            this.discountApplied = true
            return true
        }
        return false;
    }

    getTotal(): number {
        // Sum all item prices. If discount was applied, subtract 10%.
        let total = 0; 
        this.items.forEach((price)=>{
            total += price
        })

        if(this.discountApplied){
            total *= 0.9
        }
        return Math.round(total * 100) / 100;
    }

    checkout(): void {
        // Mark cart as checked out (only if it has items and isn't already checked out)
        if (this.items.size > 0 && !this.isCheckedOut) {
            this.isCheckedOut = true;
        }
    }
}

// Test your implementation
const cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 29.99);

console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 1029.98

console.log(`Discount: ${cart.applyDiscount("SAVE10")}`);                // true
console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 926.98
