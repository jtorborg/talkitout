var value = 42;

if (value >= 53) {
value = value+42;
} else {
  value = value-13;
}
console.log(value);

var string = "11"
value = value + string;
console.log(value);
var array = [];

for(var i = 0; i < value.length; i++) {

array.push(value.charAt(i))
  console.log(array);
}
console.log(array);


array.shift();
console.log(array);
array.pop();
console.log(array);

var backwards = "";

for(var i =0; i <= array.length; i++) {

  backwards = backwards + array.pop(i);

console.log(backwards);
}
console.log(backwards);

value = parseInt(value);
console.log(value);
backwards = parseInt(backwards);
console.log(backwards);

//Switching Programmers
value = value + backwards;
console.log(value);
if(value < 60){
  value = 14;
  console.log(value);
}
else if (value == 2930) {
  value = 27;
  console.log(value);
}
else {
value = 2;
console.log(value);
}
counter=10
while(counter<=10&&counter>0){
  value++;
  counter--;
  console.log("Value is:", value);
  console.log("Counter is:", counter);
}
var makeString=function(val){
  val=val.toString();
  console.log("Before For: ", val);
  if(val.length > 1){
    console.log("Beginning of For: ", val);
    //val.substring(0,1);
    var val = val.substring(1,2);
    console.log(val);
    console.log("After Substring: ", val);
    return val;
  }
  console.log(val);
  return val;
}
value=makeString(value);
console.log(value);
