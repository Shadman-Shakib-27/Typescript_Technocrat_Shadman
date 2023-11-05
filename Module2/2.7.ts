{
   //Generic Constrain With (Key Of ---> Object) Operator.

   //The keyof operator takes an (object) type and produces a string or numeric literal (union) of its keys. The following type P is the same type as type P = "x" | "y":

   type vehicle ={
      bike:string;
      car: string;
      ship: string
   }

   type owner="bike"|"car"|"ship" //Manually
   type owner2= keyof vehicle;

   //Using Keyof Constrain In Function With Generic

   const getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y)=>{
      return obj[key]; //user['age']---> Like This
   }

   const user ={
      name:"Shadman",
      age:50,
      address:"Mymensingh"
   };

   const result1=getPropertyValue(user,"name")





   //
}