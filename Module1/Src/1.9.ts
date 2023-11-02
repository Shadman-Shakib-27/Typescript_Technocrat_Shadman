{
   // Type Alias

   type Student={
      name:string;
      age: number;
      contactNo?:string;
      gender:string;
      address:string;
   }

   const student1:Student={
      name:'Shadman',
      age:50,
      gender:'Male',
      address:'Mymensingh'
   }

   type UserName=string;
   const userName='Alvi';

   // Type Alias in Function

   type Add=(num1:number,num2:number)=>number;

   const add:Add=(num1,num2)=>num1+num2







}