let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tick 1')
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tick 2')
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tick 3')
    },3000)
})

//Normal method

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })


//promise.all
let promisea=Promise.all([p1,p2,p3])
    promisea.then((value)=>{ 
        console.log(value)
    })