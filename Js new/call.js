const person1={
    Fname:"First_name 1",
    Lname:"Last_name 2",
    fullname:function(H_town,Country) {
        return this.Fname +" "+ this.Lname + " "+H_town+" "+ Country
    }
}

const person2={
    Fname:"First_name 1",
    Lname:"Last_name 2",
}
console.log(person1.fullname.call(person2,"Pune","India"));

console.log(person1.fullname.apply(person2,["Pune","India"]));

const result = person1.fullname.bind(person2,"Pune","India");
console.log(result);
console.log(result());
