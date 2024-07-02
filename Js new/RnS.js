function addNumbers(a,b,c,...others) {
    console.log(others);
    return a+b+c;
}
const res=addNumbers(9,8,7,6,8)
console.log(res);

var names=['A123','b456','c789']
function getNames(n1,n2,n3){
console.log(n1,n2,n3);
}
getNames(...names)

var student={
    name:"Ajay",
    age:'28',
    hobbies:["cricket,singing"]
}

const {...rest} = student;
console.log(rest);

var newStudent={
    ...student,
    age:29
}
console.log(newStudent);