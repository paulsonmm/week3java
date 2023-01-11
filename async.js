// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
console.log('i am waiting')
asyncFunc();

// promise.catch((message)=>{
//     console.log(message)
// })