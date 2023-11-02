{  
   // Union(|) and Intersection(&)

   // type FrontendDeveloper= "Fakibaz Dev"|"Expert Dev"
   // type FullstackDeveloper= "Frontend Dev"|"Expert Dev"

   // const frontendDeveloper:FrontendDeveloper='Fakibaz Dev'

   // //Type Alias in Union and Intersection
   // type User={
   //    name:string;
   //    gender:"Male"|"Female";
   //    blood: "O+"|"A+";
   //    email?:string
   // }

   // const user:User={
   //    name:'Shadman',
   //    gender:"Male",
   //    blood:"A+"
   // }

   type FrontendDeveloper={
      skills:string[];
      designation1:"Frontend Dev"
   }

   type BackendDeveloper={
      skills:string[];
      designation2:"Backend Dev"
   }

   type FullstackDeveloper= FrontendDeveloper & BackendDeveloper;

   const fullstackDeveloper:FullstackDeveloper={
      skills:["HTML","CSS","EXPRESS"],
      designation1:"Frontend Dev",
      designation2:"Backend Dev"
   }








}