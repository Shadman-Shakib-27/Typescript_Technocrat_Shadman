{
   //  Function With Generics
   const createArrayWithGenerics=<T>(param:T):T[]=>{
      return [param]
   }
   const resString=createArrayWithGenerics<boolean>(true);
   //Type Alias
   type user={
      name:string,
      age:number};
      
   const resGenenricObj=createArrayWithGenerics<user>({name:"Shadman",age:50})

   // Create Arrray With Tuple

   const createArrayWithGenericTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
      return [param1,param2]
   }  
   const resString1=createArrayWithGenericTuple<string,string>("Shadman","Shakib");
   const res2=createArrayWithGenericTuple<string,{name:string,age:number}>("Shakib",{name:"Shakib",age:50});

   const addCourseToStudent=<T>(student:T)=>{
      const course= "Next Level Web Dev."
      return {
         ...student,course
      }
   }
   const student1=addCourseToStudent({name:"Shadman",age:20,devType:"NLWD"})
   const student2=addCourseToStudent({name:"Shakib",age:20,devType:"NLWDM"})
   console.log(student1,student2);
   //
}