// learn Spread Operators (...)
// Spread Operators Use Hoy Full Ekta Array Ba Erokom Kichu Ke Arektay Dhukate.

const bros1:string[]=['Shadman','Shakib','Alvi'];
const bros2:string[]=['Shamoly','Jahan','Mukta'];

bros1.push(...bros2)

const mentors1={
   typescript:'Shadman',
   redux:'Shakib',
   dbms:'Alvi'
}

const mentors2={
   prisma:'Shamoly',
   next:'Jahan',
   mongoose:'Mukta'
}
 
const mentrosList={
   ...mentors1,
   ...mentors2
}

// Learning Rest Operators

const greetFriends=(...friends:string[])=>{
   
   friends.forEach((friend:String) => { console.log(`Hi ${friend}`);
      
   });
}