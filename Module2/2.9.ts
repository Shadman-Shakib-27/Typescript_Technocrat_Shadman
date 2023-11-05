{
   //Conditional Type---> Kono Ekta Type Er Man Arekta Type Er Upor Depend Thake Kono Ekta Condition Er Base Kore Tokhon Take Conditional Type Bole.

   type Sheikh = {
      car:string;
      bike:string,
      ship:string;
   }

   type vehicleCheck <T> = T extends  keyof Sheikh?true:false;

   type hasplane= vehicleCheck<"plane">

   
   //
}