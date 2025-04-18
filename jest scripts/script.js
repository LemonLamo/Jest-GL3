function IsTriangle(x, y, z){
    return (x + y > z) && (x + z > y) && (y + z > x);
}

function IsIsocele(x,y,z){
    return (x == y) && (x != z) || (x == z) && (x != y) || (y == z) && (y != x);
}

function Isequilateral(x,y,z){
    return (x == y) && (x == z)
}

exports.IsTriangle = IsTriangle;
exports.IsIsocele = IsIsocele;
exports.Isequilateral = Isequilateral;