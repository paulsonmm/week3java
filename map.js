const users=['paulson','gokul','shabas']

function transform(values){
    return values.toUpperCase()
}
const afterTransform =users.map(transform)
console.log(afterTransform);