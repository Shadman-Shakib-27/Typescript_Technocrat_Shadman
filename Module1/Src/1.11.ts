{

   // Ternary Operator | Optional Chaining | Nullish Operator

   //Ternary Operator
   const age:number=15;

   const isAdult= age>18?"Adult":"Not Adult";
   // console.log({isAdult});

   // Nullish Operator

   const isAuthenticated="";
   const result1=isAuthenticated??"Guest";
   const result2=isAuthenticated?"Guest":"Not Guest"
   // console.log({result1},{result2});

   // Optional Chaining
   //Type Alias

   type User={
      name:string;
      address:{
         city:string;
         road:string;
         presentAddress:string;
         permanentAddress?:string;
      }
   }

   const user:User={
      name:"Shadman",
      address:{
         city:"Mymensingh",
         road:"Available",
         presentAddress:"Kushtia",
      }
   }

   // Optional Chaining
   
   const permanentAddress=user?.address?.permanentAddress??"Permanent Address Not Found";
   console.log({permanentAddress});












}