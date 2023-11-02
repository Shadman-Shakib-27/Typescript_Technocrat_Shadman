{// Learning Function --> Normal Function --> Arrow Function

function add(num1:number,num2:number):number{
   return num1+num2;
}
add(2,5);

const addArrow=(num1:number,num2:number):number=>{
  return num1+num2
}

// Object-->Function=Method

const richUser={
   name:'Alvi',
   balance:0,
   addBalance(balance:number):string{
      return `My New Balance is ${this.balance+balance}` //Object Er Vitor Function Access Korte Hole (.this) Use Hoy..
   }
}

const arr:number[]=[1,2,3];

const newArray:number[]=arr.map((elem:number):number=>elem*elem)

}