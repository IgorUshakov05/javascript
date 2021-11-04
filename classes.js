class Person {
    type = 'human'
    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(`${this.name}, говорит Привет!`);
    }
}

const Max = new Person('Max')
// Max.greet("jarik")
// console.log(Max)
// console.log(Max.type)
// console.log(Max.__proto__ === Person.prototype);
class Programmer extends Person {
    constructor(name, job   ) {
        super(name)

        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }   

    set job(job) {
        if (job.length < 2) {
            console.log("Value fails")
        }
        this._job = job
    }

    greet() {
        super.greet()
        console.log('Rewrite');
    }
}

const FronEnd = new Programmer('Max', 'Frontend')
// console.log(`${FronEnd.name} ${FronEnd.job} ${FronEnd.type}`);
// FronEnd.greet()
// console.log(FronEnd.job);
FronEnd.job = '3'
// console.log(FronEnd.job);

//Static

class Util {
    static avenrage(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length 
    }
}

// const utol = new Util
console.log(Util.avenrage(1,1,2,3,5,8,13))
// console.log(utol.avenrage(1,1,2,3,5,8,13));