// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Ater delay");
//     }, 500)
// });

const delay = ms => new Promise(((resolve,reject) => {
    setTimeout(() => resolve('Done'), ms )
}))

delay(1000).then(data => console.log(data))