const  {IsTriangle, IsIsocele, Isequilateral} =  require("./script");
const {Query, describe, test, expect } = require("@jest/globals");

describe('testing if the three sides make a triangle',() =>{
test("IsTriangle", () => {
    expect(IsTriangle(3, 4, 5)).toBe(true); // 3 + 4 > 5, 3 + 5 > 4, 4 + 5 > 3
    expect(IsTriangle(1, 1, 2)).toBe(false); // 1 + 1 !> 2
    expect(IsTriangle(0, 0, 0)).toBe(false); // all sides are zero
    expect(IsTriangle(-1, -1, -1)).toBe(false); // all sides are negative
	expect(IsTriangle(3, 4, 5)).toBeTruthy(); // we can use truthy to check if the statement is evaluated as true in an if statement  
    expect(IsTriangle(3, 4, -5)).toBeFalsy(); // same for falsey
});
});

//for a large test suit you can use "each" to make it go through each one of em and test all the values without having to write the test manually each time
describe('testing if the three sides make a triangle',() =>{
test.each([3, 3, 5, true], [3, 4, 5, false], [5, 5, 3, true])
("IsIsocele", (a, b, c, expected) => {
    expect(IsIsocele(a, b, c)).toBe(expected);
});
});

//
test("Isequilateral", () => {
    expect(Isequilateral(3, 3, 3)).toBe(true); // all sides are equal
    expect(Isequilateral(3, 4, 5)).toBe(false); // all sides are different
})  

//asynchronous tests
describe('testing if the three sides make a triangle',() =>{
test( async () => {
	await expect(Query()).resolves.ToBe('Hello There');
});
});

