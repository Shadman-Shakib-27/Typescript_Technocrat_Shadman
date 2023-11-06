{
   //Inheritance --> Inheritance is one of the key features of Object-oriented programming in TypeScript. It allows us to create a new class (derived class) from an existing class (base class).

   class Car{
      Color:string;

      constructor(color:string){
         this.Color=color;
      }
   }

   class Audi extends Car{
      Price:number;

      constructor(price:number,color:string){
         super(color)
         this.Price=price;
      }

      display(){
         console.log(`The Color Of The Car is: ${this.Color}`);
         console.log(`The Price Of The Car is: ${this.Price}`);
      }
   }

   const shamoly= new Audi(8500000,"White")
   shamoly.display();













   //
}