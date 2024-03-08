/*var _myName = 'vinod bahadutr thapa'
console.log(_myName );*/
/*var myAge ='26'
 console.log( myAge);*/
 /* var $kearning = 'me' */
 /* console.log( $kearning);
 console.log( 10 +"20")
 console.log("vinod" -"khushi")

var iamuseless ='null'
console.log(iamuseless)

 var imkhushi 

 console.log(imkhushi
 var myPhonenumber=1234567899
 var myname ="khushityagi"

 console.log( isNaN(myPhonenumber)) 
 console.log ( isNaN(myname))
 console.log( 3+3)
 console.log(10-5)
 console.log(20/5)
 console.log ("remainder operator"+ 91%9))
 var a=30;
 var b=10;
 console.log(a |== b);
 var num = 3**3;
 console.log(num)

 var year =2020
 debugger
  if(year % 4 ===0){console.log(   year+"is a leap year")

  }else{console.log(  year +"is not a leap year")}
 
 var age=19; console.log(
 (age > 18)? "can vote":"can't vote");
 
 var area = "circle";
 var pI = 3.14 ,  l=5 , b=4, r =3 ;
 if(area == "circle"){
        console.log("the area of a circle is :" + pI*r**2 ) }
   else if (area == "rectangle"){ console.log("the area of a  rectangle is :" +  (l*b) )};

   Control statement& loops
   1.if else
   2.switch statement and loops
   3.while loops
   4.Do while loops
   5.for loops
   6.for in loops
   7.for of loops conditional ternary loops
   
   
   var  age = '25 ';
   if(age  > 18){console.log(' you are adult' )}
    else {
     console.log( 'you are minor' );
   }

var country ="india";
var age = "12";
if(age>18 && country == "india"){
    console.log("you can get a driving licience")
}
else{ console.log("you cannot get a driving licience")}*/
/*for(var num = 1; num <= 10; num++){debugger
  var tableof= 8;
  console.log(tableof + "*" + num+ "=" + tableof *num)}
 

  var tableof= 5;
  console.log(tableof + "*" + num + "=" + tableof *num)
}

 for(var nom = 1; nom <= 15; nom++ ){
  var tabli= 18;
  console.log(tabli + "*" + nom + "=" + tabli *nom) 
 }
 for(var nem ="1" ; nem <= 10; nem++){
  var tablee = "14";
  console.log(tablee +"*"+ nem +"=" +tablee*nem)
}
for(var nemi= "1"; nemi <= 18; nemi++){ 
var table= "200";
 console.log(table+ "*" + nemi+ "=" + table*nemi)  


function sum(a,b){
  var total = a*b;
  console.log( total);
}

sum( 30,40);
sum(25,25);
sum();}

for(let num = 1; num <= 10; num++) {
 let table = 5;
console.log( `${ table} * ${num} =  ${table* num}` );

}
function mult(a,b = '6'){
return a*b;
}
console.log(mult (5));

const sum =()=> ` the sum of the two number is${(a=5) *(b=6)};
 `
 console.log(sum())

  var names = ['khushi','prajjwal','pinky','bhushan'];
 names .forEach (function( elements, index, array){
 console.log(elements  + ' :  ' +index )}
 );
 
 var animals = [ 'sheep', 'goat', 'cow','deer' ,'lion', 'beer']
var indexofanimal = animals.indexOf('goat');
if(  indexofanimals !== -1){
  var updateofanimals = animals.splice( indexofanimals, 1 , 'GOAT')
  console.log( animals );
}else{
  console.log('no such data found')
}
let arr = [ 25,36,49,64] ;
let sum = arr.reduce(( accumulator, currelm,index, array ) => {debugger
  return accumulator += currelm;
})
 console.log( sum)


//let arr =  [2,3, 4];
 //let sum = arr.reduce((accumulator, currele, index, array) => { 
//return accumulator += currele}) ;
// 

let currdate = new Date()
console.log( currdate .toLocaleString ());

let currenttime = new Date();
console.log(new Date().toLocaleString ());
let individualtime = new Date();
console.log(individualtime.toLocaleString());
console.log(individualtime.toString());
console.log(Date.now());
//console.log(individualtime.toString());
let individualtimee = new Date ();
console.log(individualtimee. toString())
let currentdate= new Date();
console.log(currentdate.toLocaleString())

var names = ['khushi','prajjwal','pinky','bhushan'];
names .forEach (function( elements, index, array){
console.log(elements  + ' :  ' +index )}
);;

var namess = ['ccsu' ,'vidya','miet', 'meerut collge' , 'venkateshwar']
namess.forEach (function( elements, index, array){
  console.log(elements +' : '+ index)
} 
const age =  25;
if(age<20){
console.log("he is   adult" )}

else{console.log("he is not adult")};)

const fruit = " grapes"

switch ( fruit) {
  case "apple":
  console.log(" it is apple");

  break
  case "banana":
    console.log("it is a banana");
    break
    case" grapes":
    console.log("it is grapes");
    break
    default:
      console.log("it is somethhing");

}

let arr = [ 25,36,49,64] ;
let sum = arr.reduce(( accumulator, currelm,index, array ) => {debugger
  return accumulator += currelm;
})
 console.log( sum)
 
 let array = [50,50,50,50];
 let sume = array.reduce((accumulator, currentelement, index, array) => {debugger 
return accumulator += currentelement;
 })
 console.log (sume);


 let arrayi = [ 10, 40, 49];
 let sumi = arrayi.reduce((accumulator, currentelement, index, array)=> {debugger
return accumulator += currentelement;})
console.log (sumi)

let currdate = new Date()
console.log( currdate .toLocaleString ());

 let currentdate = new Date()
 console.log( currentdate .toLocaleString()); 


 var  age = '25 ';
 if(age  > 18){console.log(' you are adult' )}
  else {
   console.log( 'you are minor' );
 }

 var age = '30';
 if( age<18) {console.log('you are a boy')}
 else{console.log('you are a bae');}

 var age = '25';
 if (age>21){console.log('you can vote')}
 else{console.log ('you cannot vote')} */



//  javascript again
// var myname="khushi tyagi"
// var myphonenumber= "56788484"
// console.log(isNaN(myname))
// console.log (isNaN(myphonenumber))
// if(isNaN(myname)){
//  console.log("please enter a valid Number!!") 
// }


// var tmr= "raining";

// if ( tmr= 'raining') {console.log('take a raincoat')
  
// } else {console.log('do not take raincoat')
  
// }


// var year= 2500
// if(year%4 === 0){if(year % 100===0){console.log( 'this is not a leap year'+ year)
   
// }else{'this year is a leap year'+ year}
//   console.log('this' + year + 'year is a leap year')
// }
// else{
//   console.log('this'+year+ ' year is not a leap year')
// }
// var age= 19; 
//  console.log(age>18)? "he can vote": "he cant vote"; 

// for loop statement

// for (let num =0 ; num<=10;  num++) {let table= 5;
//   console.log(table+'*'+num +"="+table*num);
  
// }

// var vegetables= ['patato', 'tamato', 'onion', 'cabbage']
// console.log( vegetables.pop());
// console.log(vegetables);

let arr = [ 2,3,4,6,8]
let arr2 = arr.map(( crntelm)=> { 
  return crntelm *2;
}) .filter((crntelm)=>{
return crntelm>10;
})
console.log(arr2)





