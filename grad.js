const grad = 32

if (grad > 90) {
    console.log('A')
}  else if( grad<=89 && grad >=80) {
    console.log('B')
} else if( grad<=79 && grad >=70) {
    console.log('C')
} else if( grad<=69 && grad >=60) {
    console.log('D')
} else {
console.log('F');

}       

var num1 =30 
var num2 = 20

 var result = (num1 > num2)? num1*2 : num1 + num2
 console.log(result);
 


 var score = 10 

 if (score >= 80) {
    console.log('go for a lunch');
    
    
 } else {
    if ( score< 80 && score >=60) {
        console.log("tell your friend, good luck next time. ");
        
    } else if ( score<60 && score >=40) {
        console.log(" keep your friend's message unseen'");
        
    }else{
        console.log("you are block my friend don't contact anymore");
        
    }
    
 }