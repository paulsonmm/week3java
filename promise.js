const myPromise=new Promise((resolve,reject)=>{
    let mark=78

    if(mark>50){
        resolve('You have won the exam')
    }else{
        reject('You Failed')
    }
})

myPromise.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message)
})