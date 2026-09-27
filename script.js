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


//  =====================  Bind ================ 
// function ko foran execute krta ha new function return krta ha is me this 
// permenanatly bind hojata ha 
 function message(Name){
    console.log(`Welcome to ${this.Name}`);
 }

 let Org = {
    Name : "abc Organization",
 }

  let newFunction = message.bind(Org);
  newFunction();

  let School ={
    Name: "abc school"
  }

  let newFun = message.bind(School);
  newFun();


//  ===================  Apply ====================