const defB = 30
const getDef = c => c*2
function compute(a = 12, b = getDef(a)) {
    return a+b
}
console.log(compute(10));