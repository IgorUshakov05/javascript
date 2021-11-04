const symbol = Symbol('demo')
const other = Symbol('demo')

const obj = {
    name: "Elena",
    demo: 'DEMO',
    [symbol]:'meta'
}

for (let key in obj) {
    console.log(key);
}

console.log(obj.demo);
console.log(obj[symbol]);