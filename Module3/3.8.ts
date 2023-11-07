{
  // Polymorphism -->Polymorphism is an object-oriented programming concept that refers to the ability of a variable, function, or class or object to take on multiple forms.

  //Here getArea() --> Function Is Used To Explain Polymorphism

  class Shape {
    getArea() {
      return 0;
    }
  }
  // pi*r*r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(heigth: number, width: number) {
      super();
      this.height = heigth;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param1: Shape) => {
    console.log(param1.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(5);
  const shape3 = new Rectangle(5, 5);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);

  //
}
