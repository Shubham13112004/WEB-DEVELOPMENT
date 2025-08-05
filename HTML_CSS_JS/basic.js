console.log("Shubham");


let array = (a) => {
    let total = 0;
    for(let i=0;i<a.length;i++){
        total+=a[i];    
    }
    let ans = total/arr.length;
    return ans;
};

let arr = [1,2,3,4,5,6,7,8];
let bbb = array(arr);

console.log(bbb);





function avg(arr) {
    let total = 0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];    
    }
    let ans = total/arr.length;
    return ans;
};

let a = [1,2,3,4,5,6,7,8];
let aaa= avg(a);
console.log(aaa);



console.log("Sum Of All Element In Array");

    let x = [1,2,3,4,5,6,7,8,9,10];

   let h= x.reduce((sum,element) =>{
        
        return sum+=element;
    })
console.log(h);
