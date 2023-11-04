{

   //Generic Type--> Amra Jodi Kono Type Ke Generalize Korte Pari Orthat Dynamic Vabe Jekono Somoye Amader Proyojon Onujayi Type Toiri Korte Pari & Reuse Korte Pari Seitai Generic Type..

   // Type Declare With Generic Type & Dynamic Reusable.

   type GenericArray<T>=Array<T> //--> Ekhane "T" Holo Parameter.

   const rollNumber: GenericArray<Number> = [1,2,20];

   const mentors:GenericArray<string>= ["Shadman","Shakib","Alvi"];

   const boolArray:GenericArray<boolean>= [true,false,true];

   // Generic With Array Of Object.

   const user:GenericArray<{name:string,age:number}>=[
      {
         name:"Shadman",
         age:24,
      },
      {
         name:"Shamoly",
         age:23,
      }
   ]

   //Generic Tuple--> 

   //Need to Know Something Here In Conceptual Session
   type GenericTuple<X,Y>=[X,Y];

   const manush:GenericTuple<string,string>=["Mr. X","Mr. Y"];



   //
}