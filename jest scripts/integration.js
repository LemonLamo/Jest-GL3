const express = require('express');
const { IsTriangle, IsIsocele,Isequilateral } = require('./script');

const app = express();

app.use(express.json());
app.listen(5000);


app.post("/CheckTriangle", (req, res) => {
    const { a, b, c } = req.body;
    const isTriangle = IsTriangle( a,b,c);
    const isIsocele = IsIsocele( a,b,c);
    const isEquilateral = Isequilateral(a,b,c);
    res.json({ isTriangle,isIsocele,isEquilateral });
});