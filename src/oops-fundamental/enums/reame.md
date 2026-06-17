# Enum

An enum (short for enumeration) is a special data type that defines a fixed set of named constants. Unlike strings or integers, enums are type-safe, meaning the compiler ensures you can only use values that actually exist in your defined set.

They ensure that a variable can only take one out of a predefined set of valid options.

### Simple Enum

```typescript
enum OrderStatus {
  PLACED = "PLACED",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}
```

### Enums with Properties and Methods
Enums can do more than just name constants. In many languages, each enum value can hold additional data and even define behavior. This makes them surprisingly powerful for modeling domain concepts.

```typescript
class Coin {
    static readonly PENNY = new Coin("PENNY", 1);
    static readonly NICKEL = new Coin("NICKEL", 5);
    static readonly DIME = new Coin("DIME", 10);
    static readonly QUARTER = new Coin("QUARTER", 25);

    private constructor(
        public readonly name: string,
        private readonly value: number
    ) {}

    getValue(): number {
        return this.value;
    }
}


const total: number = Coin.DIME.getValue() + Coin.QUARTER.getValue(); // 35
```
