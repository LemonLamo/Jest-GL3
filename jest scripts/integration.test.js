const {test, expect} = require("@jest/globals")
const axios = require("axios");

test("CheckTriangle", async () => {
    const response = await axios.post("http://localhost:5000/CheckTriangle", {
        a: 3,
        b: 4,
        c: 5
    });
    expect(response.data.isTriangle).toBe(true);
    expect(response.data.isIsocele).toBe(false);
    expect(response.data.isEquilateral).toBe(false);
});