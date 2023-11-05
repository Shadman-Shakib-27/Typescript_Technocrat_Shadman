{

 
   const arrOfNumbers: number[] = [1, 4, 5];
 
   // const arrOfStrings : string[] = ['1','4','5']
   const arrOfStrings: string[] = arrOfNumbers.map((number) =>
     number.toString()
   );
   console.log(arrOfStrings);
 /----------------------------------/

    // Mapped Types

   // type AreaNumber = {
   //   height: number;
   //   width: number;
   // };
 
   //type Height = AreaNumber["height"]; // look up type
  
   // keyof AreaNumber => "height"|"width"
   // T => {height:string;width:number}
   // key => T["width"]
   
   type AreaString<T> = {
     [key in keyof T]: T[key]; //indexing Form
   };
 
   const area1: AreaString<{ height: string, width: number }> = {
      height: "100",
      width: 50,
   };

    type AreaStrings <T>={
      [key in keyof T]:T[key];
    }

   //
}