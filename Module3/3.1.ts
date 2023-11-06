{
   //Class & Object

   class  Animal{

      constructor(public name:string, public species:string, public sound:string){}

      makeSound(){
         console.log(`This ${this.name} Says ${this.sound}`);
      }
   }

   const dog = new Animal ("German Shepard Zoo","Dog","Ghew Ghew")
   dog.makeSound()





   //
}