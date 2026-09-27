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

// almost call jsa hi ha this ki value set krtna ha function ko foran execute
//  krta ha 
//  argument array ki form me pass krta ha 


 function intro(Name , id){
    console.log(`The Name of Student is ${this.Name}`);
    console.log(`The Id of student is ${this.id}`);
 } 
 let std ={
    Name: "Ali",
    id:237689
 }
 let std2 ={
    Name: "Ahmed",
    id:237689
 }

 let std3 ={
    Name: "Sajid",
    id:237689
 }
 let std4 ={
    Name: "Saqib",
    id:237689
 }

 let std5 ={
    Name: "Sadiq",
    id:237689
 }

  intro.apply(std5, ["Saqib" ,889]);

  function studentReport(subject1, subject2) {
    let totalMarks = subject1 + subject2;
    console.log(`Student Name: ${this.name}`);
    console.log(`Total Marks in 2 subjects: ${totalMarks}`);
}
let student1 = {
    name: "Ali"
};

 let student2 = {
    name:"Saqib"
 }

studentReport.apply(student2, [85, 90]);

 function intro(Name , City){
    console.log(`Hello My name is ${Name}`);
    console.log(`I lived in ${City}`);
 }
 intro.apply(null, ["Fiza" , "Karachi"]);