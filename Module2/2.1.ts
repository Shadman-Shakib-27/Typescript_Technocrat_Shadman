{
   //

   //Type Assertion--> Ami Developer Hisebe Typescript Er Theke Better Type Bujhle Ba Declare Korte Parle Seitakei Type Assertion Bole.

   let anything:any;

   anything="Next Level Web Dev.";

   anything=222;

   //(anything as number)

   const kgToGm=(value:number|string):number|string|undefined=>{
      if(typeof value ==="string"){
         const convertedValue=parseFloat(value)*1000;
         return `The Converted Value is: ${convertedValue}`
      }
      else if(typeof value === "number"){
         return value*1000;
         
      }
   }

   const result1=kgToGm(1000) as number
   const result2=kgToGm("1000") as string

   // Try Catch

   type UserError={
      message:string
   }

   try{

   }catch(error){
      console.log((error as UserError).message);
   }

   //
}