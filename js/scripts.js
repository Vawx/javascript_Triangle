/*
equilateral: all sides are equal;
isosceles: exactly 2 sides are equal;
scalene: no sides are equal.
NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
*/

function Triangle( x, y, z ) {
    this.x = parseInt( x );
    this.y = parseInt( y );
    this.z = parseInt( z );
}

Triangle.prototype.isTriangle = function( ) {
    if( this.x + this.y > this.z && this.y + this.z > this.x && this.z + this.x > this.y )
    {
        return true;
    }
    return false;
}

Triangle.prototype.equilateral = function( ) {
    if( this.x == this.y && this.z == this.x && this.z == this.y )
    {
        return true;
    }
    return false;
}

Triangle.prototype.isosceles = function( ) {
    if( this.x == this.y || this.y == this.x || this.x == this.z )
    {
        return true;
    }
    return false;
}

Triangle.prototype.scalene = function( ) {
    if( this.x != this.y && this.z != this.x && this.z != this.y )
    {
        return true;
    }
    return false;
}