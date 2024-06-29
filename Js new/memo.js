let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0]
        if(n in cache){
          console.log("Cache");
          console.log(cache);
          return cache[n];
        }
        else{
          console.log('Calculating 1st time');
          let res = fun(n) 
          cache[n] = res
          return res;
        }
    }
}

console.time()
const effecient=memoize(calc)
console.log(effecient(6));
console.timeEnd()

console.time()
console.log(effecient([6]));
console.timeEnd()