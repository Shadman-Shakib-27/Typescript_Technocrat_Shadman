{
   //
   // Type Guard (&)
   type newType=string|number;

   const add =(param1:newType, param2:newType):newType=>{
      
      if(typeof param1==="number" && typeof param2==="number"){
         return param1 + param2;
      }
      else{
         return param1.toString() + param2.toString();
      }
   }
   const result=add("2","5");
   // console.log(result);


   //Type Guard (in)
   type normalUser={
      user:string;
   }

   type AdminUser ={
      user:string;
      role:string;
   }

   const userFunc = (user0 : normalUser | AdminUser)=>{

      if('role' in user0){
         console.log(`My Name is ${user0.user} And My Role is ${user0.role}`);
      }

      else{
         console.log(`My Name is ${user0.user}`);
      }

   }

   const normalVai:normalUser={
      user:"Shadman"
   }

   const adminVai:AdminUser={
      user:"Shadman",
      role:"Admin"
   }

   userFunc(adminVai)








   //
}