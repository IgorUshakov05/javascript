//REst
function average(...args) {
    return args.reduce((acc, i) => acc+=i, 0) / arguments.length   
}

// console.log(average(10,20,30,40,50))


//Spret

// const array = [1,2,3,5,8,13]
// console.log(...array);
// console.log(Math.max(...array));

// const fib = [1, ...array]
// console.log(fib);


//Destructuring 

const array = [1,2,3,5,8,13]
// const a = array[1]
// array[1] = undefined
// const [a,b = 42, ...c] = array
// console.log(a,b,c);
//Object
const addres = {
    country: "Russia",
    city: "Moscow",
    street: "Red",
    cuncat: function() {
        return `${this.country} ${this.city} ${this.street}`
    }
}

// const {city, ...rest} = addres
// console.log(city);
// console.log(rest);
const newAddres = {...addres,
    street: "Blue"
}

console.log(newAddres); 
