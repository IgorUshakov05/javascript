const person = {
    age: 26,
    name:"Irina",
    'country-live': 'Russian',
    toString: function() {
        return Object
        .keys(this)
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ')
    }
}
console.log(person.toString());