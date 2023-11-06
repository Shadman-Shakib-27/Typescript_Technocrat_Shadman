{
   //Instance Of Type

   class Animal {
      name:string
      species:string

   constructor(name:string,species:string){
      this.name=name;
      this.species=species;
      }

      makeSound(){
         console.log("This is A Animal Bro!!!");
      }
   }

   class Dog extends Animal {

      constructor(name:string,species:string){
         super(name,species)
      }

      makeBark(){
         console.log("I am Barking, Ghew Ghew");
      }
   }

   class Cat extends Animal {

      constructor(name:string,species:string) {
         super(name,species)
      }
      
      makeMeow(){
         console.log("I am Meowing");
      }
   }

   // Smart Way Te Handle Korar Jonne Chaile Amra Function Bebohar Korte Pari.

   const isDog =(animal:Animal): animal is Dog=>{
      return animal instanceof Dog
   }

   const isCat =(animal:Animal): animal is Cat=>{
      return animal instanceof Cat
   }


   const getAnimal = (animal: Animal) => {

      if (isDog(animal)) {
        animal.makeBark();
      } 
      else if (isCat(animal)) {
        animal.makeMeow();
      } 
      else {
        animal.makeSound();
      }
    };

   const dog = new Dog("German Shepard Zoo","Dog");
   const cat= new Cat ("Persian Cat","Cat");

   getAnimal(dog)
   getAnimal(cat)
   














   //
}