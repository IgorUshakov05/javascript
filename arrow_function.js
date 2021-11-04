// function sum(a,b) {
//     return a+b
// }

// function cube(a) { 
//     return a **3
// }
const sum = (a=0,b=0) => a+b
// console.log(sum());
const cube = a => a **3
// console.log(cube(2));
// setTimeout(() => console.log("Hello"), 1000)
//Context
function log() {
    console.log(this);
}

const arrowLog = () =>console.log(this);

const person = {
    name: "Igor",
    age: 16,
    log:log,
    arrowLog: arrowLog,
    delayLog: function() {
        const self = this
        global.setTimeout(() => {
            console.log(this.name + " " + this.age)
        },900)
    }
}
// person.log()
person.delayLog()