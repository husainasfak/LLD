# Class 

A **class** is a blueprint which contains attributes (data) and methods (behaviour). It defines what an object will contains (its data) and what it will be able to do (its behaviour)

A class is not an object itself, it's template used to create many objects with similar structure but independent state.



```typescript
    class Car {
        // attributes
        private brand:string;
        private model:string;
        private speed:number;

        constructor(brand:string, model:string, speed:number){
            this.brand = brand;
            this.model = model;
            this.speed = speed ?? 0;
        }

        // methoda
        accelerate(increment: number):void{
            this.speed += increment
        }

        displayStatus(){
            console.log(`${this.brand} which have ${this.model} model running at ${this.speed} km/hr`)
        }
    }
```

<br/>
<br/>
<br/>


# Objects

An object is an instance of a class. Each object gets its own copy of the attributes and methods defined in the class. 


```typescript
    const creta = new Car('Hyundai','Creta',150)
    const i20 = new Car('Hyundai','i20',)
    const fortuner = new Car('Toyota','Fortuner')
```