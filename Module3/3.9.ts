{
  // Abstraction --> Abstraction is the process of hiding the internal details of an application from the outer world.

  // Abstraction  : 1. Interface 2. Abstract

  // Idea
  interface vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //Real Implemantation
  class Car1 implements vehicle1 {
    startEngine(): void {
      console.log(`I am Start My Engine`);
    }
    stopEngine(): void {
      console.log(`I am Stop My Engine`);
    }
    move(): void {
      console.log(`I am Moving.`);
    }
    test(): void {
      console.log(`I ama Just Testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine(); //

  // Abstract Class

  // Idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  //Real Implement

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am Start My Engine`);
    }
    stopEngine(): void {
      console.log(`I am Stop My Engine`);
    }
    move(): void {
      console.log(`I am Moving`);
    }
    test(): void {
      console.log(`I am Just Testing`);
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();

  //
}
