// Destructuring --> Object --> Array

// Object Destructuring
const user ={
   id:123,
   name:{
      firstName:'Shadman',
      middleName:'Shakib',
      lastName:'Alvi'
   },
   contactNo:'01767407207',
   address:'Bangladesh'
}

const {contactNo,name:{firstName}}=user;

// Array Destructuring

const myFriends=['Shadman','Shakib','Alvi','Shamoly','Jahan','Mukta'];

const[,,bf,...rest]=myFriends

// ...rest Baki Sob Gular Jonne, bf Alvi Er Jonne.