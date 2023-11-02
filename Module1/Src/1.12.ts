{
   //Nullable Types

   const searchName=(value:string | null)=>{
      if(value){
         console.log("Searching");
      }
      else{
         console.log("There is Nothing To Search");
      }
   }
   searchName("Alvi")

   // Unknown Typeof

   const getSpeedInMeterPerSecond=(value:unknown)=>{
      if(typeof value ==="number"){
         const convertedSpeed=(value*1000)/3600;
         console.log(`The Speed is ${convertedSpeed} ms^-1`);
      }

      else if(typeof value ==="string"){
         const [result,unit]=value.split(' ')
         const convertedSpeed=(parseFloat(result)*1000)/3600;
         console.log(`The Speed is ${convertedSpeed} ms^-1`);
      }
      else{
         console.log('Wrong Input');
      }
   }

   getSpeedInMeterPerSecond(1000)

   // Never Types

   const throwError =(message:string):never=>{
      throw new Error(message);
   }

   throwError("Alvi is The Error King")










}