// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_email = "fz@gmwil.com";
let reg_passw = 786786;

let ent_email = "fz@gmail.com";
let ent_passw = 786786;

if(ent_email==reg_email){
  
  if(ent_passw==reg_passw){
    
    console.log("Successfully login");
  }
else{
  console.log("Wrong Password");
}
  
}
  
else{
  console.log("Wrong Credentials");
}

