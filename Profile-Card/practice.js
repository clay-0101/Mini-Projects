const deSorting = ()=>{
    let num = prompt("Enter the number")
console.log(`Orignal Number is ${num}`);
let newNum= num.split("");
let alignNum = newNum.sort((a,b)=> b-a);
console.log(alignNum.join(""));
}
deSorting();