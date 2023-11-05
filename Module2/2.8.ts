{
   //The Promise object represents the eventual completion (or failure) of an (asynchronous) operation and its resulting value.

   // Promise
   type ToDo={
   id: number,
   userId: number, 
   title: string, 
   completed:boolean
   }

   const getToDo=async():Promise<ToDo>=>{
     const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

     const data=await response.json();
     return(data);
   }
   
   getToDo();

   type Something= {something:string}

   const createPromise =():Promise<Something>=>{
      return new Promise<Something>((resolve,reject)=>{
         const data: {something:string}={something:"Something is Happening"};

         if(data){
            resolve(data);
         }
         else{
            reject("There is Nothing To Found")
         }
      })
   }

   const showData =  async():Promise<Something>=>{
      const result:Promise<Something>=createPromise()
      return result;
   }

   showData()








   //Asynchronus Typescript
   //
}