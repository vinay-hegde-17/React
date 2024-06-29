let promise = new Promise(function (resolve, reject) {
  let promiseResult = true;
  if (promiseResult) {
    setTimeout(() => {
      console.log("My Promise is fulfilled");
    }, 1000);
  } else {
    console.log("My Promise is not fulfilled");
  }
});

promise.then((res) => {
    console.log(res)})
  .catch(console.error());

let resFromserver=fetch('https://restcountries.com/v3.1/name/portugal')
console.log(resFromserver);

async function getData() {
  let resFromserver= await fetch('https://restcountries.com/v3.1/name/portugal')
  console.log(await resFromserver.json());
}
getData()

fetch('https://restcountries.com/v3.1/name/portugal')
.then((data)=>{console.log(data)})
.catch((e)=>{console.log(e)})