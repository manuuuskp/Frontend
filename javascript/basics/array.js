[1,2].length

[1,2].push(2)
[1,2].pop(); //2
[].pop(); //undefined
[1,2].unshift(0) //[0,1,2]
[1,2].shift(); //1
[1,2,3].includes(3); //true
[1,2,3].indexOf(1); //0
[1,2,3].indexOf(5); //-1
[1,2,3,1].lastIndexOf(1,2); //3
[1,2,3].join(""); //123
[1,2,3].concat([2,3,4]) //[1,2,3,2,3,4]
[1,2,3].concat(2,3,4,[6,7,8]); //[1,2,3,2,3,4,6,7,8]
[1,2,3].reverse(); //[3,2,1]

[1,2,3].forEach(itm => console.log(itm));
[1,2,3].map(itm => itm * 2);
[1,2,3].filter(item => item > 2);
[1,2,3].reduce((acc, cur) => {
    return acc+cur
}, 0);
[1,2,3].find(item => item > 1); //2 returns the first truthy value
[1,2,3].findIndex(item => item > 1); //1 returns the first truthy value's index

[1,2,3].slice(1,3); //[2,3]
[1,2,3].splice(1,2); //[2,3] but modifies original array

[1,2,3].every(item => item > 0); //true
[1,2,3].some(item => item > 2); //true checks if atleast one value is truthy
[1,2,3].fill(7,1,3); //[1,7,7] - fills the given number from start index to end index
[1,2,3,4,5].copyWithin(2,0,2); //[1,2,1,2,5] - 1st arg is target index. 2nd arg is start index of copywithin, 3rd arg is end index of copywithin
[1,2,3,[1,2],[1,2,[3,4,[5,6]]]].flat(1); // [1,2,3,1,2,1,2,[3,4,[5,6]]]
[1,2,3].flatMap(itm => [itm * 2]); //[2,4,6] - it will map and then flat by one level