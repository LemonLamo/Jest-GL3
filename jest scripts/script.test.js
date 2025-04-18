const  {IsTriangle, IsIsocele, Isequilateral} =  require("./script");
const { test, expect } = require("@jest/globals");

test("IsTriangle", () => {
    expect(IsTriangle(3, 4, 5)).toBe(true); // 3 + 4 > 5, 3 + 5 > 4, 4 + 5 > 3
    expect(IsTriangle(1, 1, 2)).toBe(false); // 1 + 1 !> 2
    expect(IsTriangle(0, 0, 0)).toBe(false); // all sides are zero
    expect(IsTriangle(-1, -1, -1)).toBe(false); // all sides are negative
    expect(IsTriangle(3, 4, -5)).toBe(false); // one side is negative
})

test("IsIsocele", () => {
    expect(IsIsocele(3, 3, 5)).toBe(true); // two sides are equal
    expect(IsIsocele(3, 4, 5)).toBe(false); // all sides are different
})

test("Isequilateral", () => {
    expect(Isequilateral(3, 3, 3)).toBe(true); // all sides are equal
    expect(Isequilateral(3, 4, 5)).toBe(false); // all sides are different
})  
