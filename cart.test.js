const c = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties:', ()=>{
    test('cart to default to empty array', ()=>{
        expect(Array.isArray(c.cart).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });

    test('total should default to 0', ()=>{
        expect(c.total).toEqual(0);
    })
})

describe('Cart Methods:', function() {
    afterEach(function() {
      c.cart = []
      c.total = 0
    });
  
    test('addToCart() should add a car object to the cart array.', function() {
      c.addToCart( cars[0] )
      c.addToCart( cars[1] )
  
      expect( c.cart.length ).toEqual( 2 )
      expect( c.cart[0] ).toEqual( cars[0] )
      expect( c.cart[1] ).toEqual( cars[1] )
    });
  
    test('addToCart() should increase the total property.', function() {
      c.addToCart( cars[0] )
      c.addToCart( cars[8] )
      c.addToCart( cars[2] )
  
      expect( c.total ).toEqual( cars[0].price + cars[8].price + cars[2].price );
    });
    
    test('removeFromCart() should remove a car object from the cart array.', function() {
      c.addToCart( cars[0] )
      c.addToCart( cars[1] )
      c.addToCart( cars[2] )
    
      c.removeFromCart( 1, cars[1].price )
    
      expect( c.cart.length ).toEqual( 2 )
      expect( c.cart[0] ).toEqual( cars[0] )
      expect( c.cart[1] ).toEqual( cars[2] )
    });
  
    test('removeFromCart() should decrease the total property.', function() {
      c.addToCart( cars[0] )
      c.addToCart( cars[8] )
      c.addToCart( cars[2] )
  
      c.removeFromCart( 0, cars[0].price )
      c.removeFromCart( 1, cars[2].price )
  
      expect( c.total ).toEqual( cars[8].price )
    });
  
    test('checkout() should empty the cart array and set total to 0.', function() {
      c.addToCart( cars[0] )
      c.addToCart( cars[1] )
      c.addToCart( cars[2] )
      c.addToCart( cars[3] )
  
      c.checkout();
  
      expect( c.cart.length ).toEqual( 0 );
      expect( c.total ).toEqual( 0 );
    })
  })