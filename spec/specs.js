
describe( 'Triangle', function() {
   it("checks if is a triangle", function() {
      var testTriangle = new Triangle(12,12,12);
      expect(testTriangle.isTriangle( ) ).to.equal(true) 
   });
   it("checks if is NOT a triangle", function() {
      var testTriangle = new Triangle(3,3,12);
      expect(testTriangle.isTriangle( ) ).to.equal(false) 
   });
   it("checks if is a equilateral triangle", function() {
      var testTriangle = new Triangle(12,12,12);
      expect(testTriangle.equilateral( ) ).to.equal(true) 
   });
   it("checks if is a scalene triangle", function() {
      var testTriangle = new Triangle(12,12,8);
      expect(testTriangle.isosceles( ) ).to.equal(true) 
   });
   it("checks if is a isosceles triangle", function() {
      var testTriangle = new Triangle(8,10,11);
      expect(testTriangle.scalene( ) ).to.equal(true) 
   });
});