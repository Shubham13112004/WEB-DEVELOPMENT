let arr = [1,2,3,4,5,2,2,2,67]
nums=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==nums){
        arr.splice(i,1)
    }
}
console.log(arr);


let numbers=1234567;
let str = numbers.toString().length;
console.log(str)

let sum=0;
while(numbers>0){
    let add = numbers%10;
    sum+=add;
    numbers= Math.floor(numbers/10);
}
console.log(sum);


let n = prompt("Enter Factorial number");
let fact=1;
if(n==0){
    console.log(0)
}else{
    for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(fact);
}

let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        if(arr[i]>max){
            max=arr[i];
        }
    }
}
console.log("MAX is ",max);


let digit = prompt("Enter Maximum range");

let random = Math.floor(Math.random()*digit)+1;



while(true){
    let guess = prompt("Enter no for guess");
    if(guess == "quit"){
    console.log("Exiting the game");
    break;
    }

    if(guess == random){
    console.log("Number is ",random, "Congrats you guess Right!!");
}else if(guess>random){
    console.log("No is Bigger than random");
}else{
    console.log("Number is Smaller then random");
}




}

