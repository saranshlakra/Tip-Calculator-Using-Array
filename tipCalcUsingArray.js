
// tip calculator using arrays
let calcTip = bill =>{
    if(bill > 50 && bill <300){
  tip = (3*bill)/20;
  return tip;
    } else{
        tip = bill/5;
        return tip;
    }
}
const bills = [125,555,44];
var tip1 = calcTip(bills[0]);
var tip2 = calcTip(bills[1]);
var tip3 = calcTip(bills[2]);
var tips = [`Bill 1 tip is ${tip1}`, `Bill 2 tip is ${tip2}`,`Bill 3 tip is ${tip3}`];


// var tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(tips);
t1 = bills[0] + tip1;
t2 = bills[1] + tip2;
t3 = bills[2] + tip3;
let total = [t1,t2,t3];
 //another way of writing
// let total = [bills[0] + tips[0], bills[1]+tips[1], bills[2]+tips[2]]; 

console.log(total); 