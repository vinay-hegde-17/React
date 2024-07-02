const arr1=[2,4,6,8];
const newArr1= arr1.map((ele)=>{
return ele*ele;
})
console.log(newArr1);

const arr2=[1,2,3,4,5,6,7,8,9];
const newArr2=arr2.filter((el)=>{
return el%2==0;
})
console.log(newArr2);

const arr3=[1,2,3,4,5,6,7,8,9]
const newArr3=arr3.reduce((prev,curr)=>{  
return prev+curr
})
console.log(newArr3);

//using a object map function implementations
const obj={
    name:"Ajay",
    loc:"UP"
}

const transformedKeys=Object.keys(obj).map((key)=>{
    return `${key}:${obj[key]}`
})
console.log(transformedKeys);