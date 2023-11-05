{
   //Constrain---> Kono Kichu Ke Force Kora Ba Enforce Korake Constrain Bole.

   // constrain Ekhane Use Hoiche (extends) & Force Kore Bole Dicche Je Ekhane id,name,email Thaktei Hobe Bakigula Na Thaklew. (Line No. 8)

   type Q={id:number,name:string,email:string};

   const addCourseToStudent=<T extends Q >(student:T)=>{
      const course= "Next Level Web Dev."
      return {
         ...student,course //Spread types may only be created from object types
      }
   }
   const student1=addCourseToStudent<{
   id: number;
   name: string;
   email: string;
   devType: string}>

   ({id: 111,name:"Shadman",email:"a@gmail.com",devType:"NLWD"})

   const student2=addCourseToStudent({id: 111,name:"Shakib",email:"b@gmail.com",devType:"NLWDM"})

   const student3=addCourseToStudent({id:333,name:"Alvi",email:"c@gmail.com",emni:"emni"})
   
   console.log(student1,student2);







   //
}