const num  = 47 
let sum = "7"
var city = "bihar" 
state = "bihar"  
//  ---- this the beauty of java script that it can assign values to a var_name without using the variable ket word 

// num = 7 .. this can't be done in js becouse this variable stores value as const so we can't change it 
console.table([num,sum,city,state])
// we can change the other variables value
// never use var variable because of scope issue and functional scope  

// if we assign a variable in js and don't given  the value to it the output is undefined not garbege value 
sum = "9"
city = "bengaluru"
state = "bhopal"
console.table([num,sum,city,state])

let scop ; 
console.log(scop);

