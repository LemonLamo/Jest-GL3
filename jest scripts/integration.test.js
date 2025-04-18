const {test, expect} = require("@jest/globals")
const axios = require("axios");

//end to end testing of an api with object matching  
test("CheckTriangle", async () => {
    const response = await axios.post("http://localhost:5000/CheckTriangle", {
        a: 3,
        b: 4,
        c: 5
    });
	const expected ={
		"isTriangle":true,
		"isIsocele":false,
		"isEquilateral":false
	}
    expect(response.data).toMatchObject(expected);
});