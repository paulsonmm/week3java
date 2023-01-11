const fullname= function(place,age){
        console.log(`${this.firstname} ${this.lastname} is coming from ${place} is ${age} `)
    }
const employe ={
    firstname:'Paulson',
    lastname:'Mathews',
    
}

const consumer={
    firstname:'Shabas',
    lastname:'OP'
}

// fullname.call(employe,('kochi','23'))
// fullname.apply(consumer,['malapuram','25'])

const binder=fullname.bind(employe)



binder('Thodupuzha','23')
