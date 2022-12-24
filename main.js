// const numbers1 = [1,2,3,4,5];
// const numbers2 = numbers1;
// numbers1.push(6);
// console.log(numbers1);
// console.log(numbers2);

const numbers1 = [1,2,3,4,5];
const numbers2 = numbers1.slice();
numbers1.push(6);
console.log(numbers1);
console.log(numbers2);
