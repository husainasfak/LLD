/*
A food delivery app needs to manage orders.

Each order belongs to a customer, contains a list of food items with prices, and tracks whether it has been placed. Customers build their order by adding items one at a time, and once they're satisfied, they place the order. After that, no more items can be added.


*/

// class  - blueprint

class Order {
    private orderId: string;
    private customerName: string;
    private foodItems: string[];  // it should be array of object that contains item name and thier price
    private totalAmount:number;
    private isPlaced:boolean;

    constructor(orderId:string, customerName:string){
        this.orderId = orderId;
        this.customerName = customerName;
        this.foodItems = [];
        this.totalAmount = 0;
        this.isPlaced = false;
    }


    // methods
    addItem(name:string, price:number):void{
        if(this.isPlaced){
            console.log('Can not modify a placed order.')
        }
        this.foodItems.push(name);
        this.totalAmount += price;
    }

    // place order if it has atleast one item, and has not placed yet
    placeOrder():boolean{
        if(this.isPlaced || this.foodItems.length === 0){
            return false
        }
        this.isPlaced = true;
        return true;
    }

    getItemCount():number{
        return this.foodItems.length
    }


     displayOrder(): void {
        const status = this.isPlaced ? "PLACED" : "PENDING";
        console.log(`Order ${this.orderId} (${this.customerName}) - ${status}`);
        for (const item of this.foodItems) {
            console.log(`  - ${item}`);
        }
        console.log(`  Total: Rs ${this.totalAmount.toFixed(2)}`);
    }

}


// object

const order = new Order("123", "Ram");
order.addItem("Paneer Butter Masala", 220);
order.addItem("Butter Naan", 40);
order.addItem("Jeera Rice", 130);

order.displayOrder()
order.getItemCount()

order.placeOrder()