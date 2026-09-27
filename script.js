// ==================== Call =========================
// call function ko foran excecute krta ha or hm manually decide krsakty hen 
// k this kis function ko  refer krha ha 


 function intro(){
      console.log(`My name is ${this.Name}`);
 }
 let user ={
    Name : "Ali",
  id:7893297
 }


 let user2 ={
    Name : "Alina",
      id:829589
 }


 let user3 ={
    Name : "Alisha",
       id:489989427
  }
 

 
 let user4 ={
    Name : "Ahmed",
   id:7892897
  }
 

intro.call(user);
intro.call(user2);
intro.call(user3);
intro.call(user4);