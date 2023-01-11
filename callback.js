function pizzaOrder(){
    console.log('Pizza ordered');
    console.log('Pizza is being prepared')
}

function pizzaReady(callback){
    console.log('Pizza is ready')
    setTimeout(()=>{
          callback()
    },2000)
}
function eatPizza(){
    console.log('Pizza is delivered')
    console.log('Eat Pizza')
}
function miscell(){
    console.log('Call Bony')
    console.log('Do laundry')
}

pizzaOrder()
pizzaReady(eatPizza)
miscell()