const arr=[1,2,3,4,5]
console.log("Original array",arr);

const newArr=[5,6,arr[0],arr[1]]
console.log("Updated array",newArr);

const spread=[7,8,[...arr]]
console.log("Spread array",spread);


const arr1=[1,3,5]
const arr2=[2,4,6]
const finalarr=[...arr1,...arr2];
console.log('Combined array',finalarr);

function sum(a,b,c) {
    return a+b+c
}
const result=sum(...arr2)
console.log('Sum',result);

function add(...numbers) {
    return numbers.reduce((total,num)=>total+num,10); 
}

console.log('Added value is',add(1,2,3,4,5));
console.log("Value is",add(10,20));

function valuesum(x,y,z) {
    return x+y+z;  
}

const valuenum=[1,2,3]

console.log("The sum of value is",valuesum(...valuenum));

console.log("The sum of value using apply method",valuesum.apply(valuenum));