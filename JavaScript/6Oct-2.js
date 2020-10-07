function checkprime(numbur) {
    if(numbur == 0 || numbur == 1) {
        return true;
    } 
    for(let i = 2; i < (numbur/2); i++) {
        if(numbur % i == 0) {
            return true;
            break;
        }
    }
    return false;
}
function spfibon(numinput) {
    if(numinput == 1) {
        return [0];
    }
    if(numinput == 0 || numinput <= 0) {
        return ["Invalid Input"]
    }
    if(numinput == 2) {
        return [0, 1]
    }
    let num1 = 0;
    let num2 = 1;
    let fibnum;
    let arr = [];
    for(let i = 0; i < numinput; i++) {
        if(i == 0) {
            fibnum = 1;
        }
        else {
            fibnum = num1 + num2;
            num1 = num2;
            num2 = fibnum;
            if(!checkprime(fibnum)) {
                fibnum = 0;
            }
            if(fibnum % 5 == 0) {
                fibnum = 0;
            }
        }
        arr.push(fibnum);
        
    }
    return arr;
}

const prompt = require("prompt-sync")();

const num_as_str = prompt("Please enter the Number of Fibonacci Numbers With a Twist you want: ");

const num = Number(num_as_str);

const theres = spfibon(num);
const outres = theres.join(" ");
if(outres == "Invalid Input") {
    console.log(outres);
}
else {
    console.log("Your Series " + outres);
}
