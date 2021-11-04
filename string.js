const title = 'Hello'
const isvarua = () => Math.random() > 0.5
const comp = `
    ${isvarua()? `<p>Visibal</p>` : ''}
     <h1 id="demo" sytle="color:red">${title}</h1>`
console.log(comp)

//Methods
const str = ' Hello '
console.log(str.startsWith('Hello'));
console.log(str.includes('ll'));
console.log(str.endsWith('lo '));
console.log(str.repeat(10));
console.log(str.trimEnd());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.padStart(10,'1234'));
 
