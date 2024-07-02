const datas=[
    {
      name:"ABC", loc:"KA"
    },
    {
      name:"XYZ", loc:"KL"
    }
]
 function getDatas(){
    setTimeout(()=>{
        datas.forEach((data)=>{
       let output =" "+data.name
        console.log(output);
     })
    },1000)
 }

//  function createData(newData,callback) {
//     setTimeout(()=>{
//     datas.push(newData)
//     callback();
//     },2000)
//  }

function createData(newData) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData)
            let error=false
            if(!error){
                resolve();
            }
            else{
                reject('Errors in it')
            }
            console.log("Datas ",datas);
        },2000)
    })
 }

//  createData({ name:"PQR", loc:"TN" })
//  .then(getDatas)
//  .catch(err=>console.log(err))
//  createData({ name:"PQR", loc:"TN" },getDatas)

async function start(){
    await createData({ name:"PQR", loc:"TN" })
    getDatas()  
}
start(); 