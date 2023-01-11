const fullname=function(place){
    console.log(`${this.firstname} ${this.lastname} is coming from ${place}`)
}

const employee={
    firstname:'Paulson',
    lastname:'Mathews'

}
const customer={
    firstname:'Yathesh',
    lastname:'Kumar'

}
fullname.apply(customer,['Kasargod'])
fullname.call(employee,('thodupuzha'))

const namer=fullname.bind(employee);
namer('india')
