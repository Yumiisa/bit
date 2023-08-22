
function enterInput(input){myDigitalClock
     
     if(input === input.split('').reverse().join('')){
        return
     }
     else{
        var reverse = input.split('').reverse().join('');
        console.log("The word is not a palindrome. Reversed:", reverse);
     }
}
var input = "Helloo"; 
 enterInput(input);

function missingNumber(numbers) {
    let sortNumber =numbers.sort((a,b)=> a-b)
    for(let i=0; i<sortNumber.length; i++){
        if(sortNumber[i] !==i +1){
            return i + 1
    }
    }
    return sortNumber.length +1
}

const arr = [1,2,3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45]; 
const missing = missingNumber(arr);
console.log("Missing number:", missing);

function myDigitalClock(){
    var d1 = new Date();
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";
//Write the code here
    if(hours >= 12){
        zone = "PM";
        if(hours >12){
            hours -= 12;
        }
    }
    hours= hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds= seconds < 10 ? "0" + seconds : seconds
    console.log(hours + ":" + minutes + ":" + seconds + ":" + zone);
    setTimeout(myDigitalClock, 1000)
}
myDigitalClock();