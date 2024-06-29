function Person() {
  this.name = "John";
  this.age = 23;
}

const pr = new Person();
console.log(pr.name);
console.log(pr.age);

function PersonInfo(fname, lname, age, eye) {
  this.firstname=fname;
  this.lastname=lname;
  this.age=age;
  this.eyeColor=eye;
}

const pinfo = new PersonInfo("John", "Doe", 50, "blue");
console.log(pinfo);
