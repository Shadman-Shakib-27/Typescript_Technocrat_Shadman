{
   // Interface --> Chachato Vai Of Type Alias

   //Type Alias VS Interface-->Type aliases are best used for creating more descriptive names for existing types or for creating reusable types. Interfaces, on the other hand, are best used for defining the shape and behavior of an object, enforcing contracts, and making it easier to reason about the code and its usage.
   
   // Array ---> Type Alias.
   // Function ---> Type Alias.
   // Object ---> Type Alias.

   type User1 = {
     name: string;
     age: number;
   };
 
   interface User2 {
     name: string;
     age: number;
   }
 
   type UserWithRole1 = User1 & { role: string };
 
   interface UserWithRole2 extends User1 {
     role: string;
   }
 
   const user1: UserWithRole2 = {
     name: "Persian",
     age: 100,
     role: "manager",
   };
 
   type rollNumber = number;
 
   // js --> object , array-> object, function -> object
 
   type Roll1 = number[];
 
   interface Roll2 {
    [index : number ] : number
   }
 
   const rollNumber1: Roll2 = [1,2,3]
                              // 0 1 2 --> number type
 
 
   type Add1 = (num1: number,num2:number)=> number
   
   interface Add2 {
     (num1: number,num2:number) : number
   }
 
   const add: Add2 = (num1 , num2 )=> num1+num2
   
   //
 }