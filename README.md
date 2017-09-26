<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn about TTD ( test driven development ). Using Jest, we'll create Unit Tests for methods inside of `cart.js` and `user.js`. After the Unit Test is created, we'll create the method inside of `cart.js` and `user.js`. The TTD approach can lead to more confidence that the code you create meets all technical requirements. 

## Step 1

### Summary

In this step, we'll create a `package.json` and install `jest` so that we can create unit tests for `cart.js` and `user.js`.

### Instructions

* Initialze a `package.json` file.
* Install and save `jest` to development dependencies.
* Modify the `test` script inside of `package.json` to be `"jest"`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by initialzing a `package.json` file using `npm`. In a terminal, we can run the command `npm init -y` to get a `package.json` file with all the default values. Once a `package.json` file is created, we can install and save `jest` into our project. We'll want to save `jest` as a development dependency. Using `npm` in a terminal, we can run `npm install --save-dev jest` to install and save it. 

Lastly, we'll just need to update the `test` script in `package.json` to be `"jest"`. This will allow us to run `npm test` in a terminal.

</details>

### Solution

<details>

<summary> <code> package.json </code> </summary>

```js
{
  "name": "unit-testing-afternoon",
  "version": "1.0.0",
  "description": "Unit Testing - Day 1 - Jest",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DevMountain/unit-testing-afternoon.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DevMountain/unit-testing-afternoon/issues"
  },
  "homepage": "https://github.com/DevMountain/unit-testing-afternoon#readme",
  "devDependencies": {
    "jest": "^21.1.0"
  }
}
```

</details>

## Step 2

### Summary

In this step, we'll begin creating Unit Tests for `cart.js` by creating the skeleton of the test file.

### Instructions

* Create a `cart.test.js` file.
* Open `cart.test.js`.
* Require `cart.js` into the file.
* Require `data/cars.js` into the file.
* Create a test group called `Cart Properties:`.
* Create a test group called `Cart Methods:`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a `cart.test.js` file at the root level of the project. This is where we'll write all the tests for the `cart.js` file. We added a `.test` to the file extension so that Jest will be able to find this test file when executing. We could of also made a `__tests__` folder and stuck a JavaScript file in there. Now that we have a test file, let's require the module we want to test. We'll also want to require `data/cars.js` so we have the same dataset that `cart.js` is going to be working with.

```js
const cart = require('./cart');
const cars = require('./data/cars.js');
```

When we require `cart.js`, we gain access to all of its exported methods and properties. You can view how many methods and properties there are by opening `cart.js`. We can group the test cases specifically for the two cart properties into a group called `Cart Properties:` and we can group the test caes specifically for the three methods into a group called `Cart Methods:`. In Jest, you can create test groups by using the `describe` keyword. The first `argument` for `describe` is the name of the group and the second `argument` is a callback function that holds all the test cases.

```js
const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties:', function() {

});

describe('Cart Methods:', function() {
  
});
```

</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties:', function() {

});

describe('Cart Methods:', function() {
  
});
```

</details>

## Step 3

### Summary

In this step, we'll begin to add the tests into `cart.test.js` by using a list of specifications. This is similiar to how you would be asked to make Unit Tests on the job. You'll have the freedom to name the test whatever you want. Therefore, when viewing solutions pay attention to the logic of the test case rather than the name of it.

In order to complete this step, you'll have to use Jest syntax that you may haven't seen yet. When testing the `methods` in `cart.js`, you'll need to reset the `cart` and `total` properties after each test. In order to do this, you can use the `afterEach` Jest method. The first argument is a callback function. This function will be called `after` `each` test. Here's an example of its syntax:

```js
afterEach(function() {
  // reset total property
  // reset cart to empty array
});
```

You can read more about it <a href="https://facebook.github.io/jest/docs/en/api.html#aftereachfn">here.</a>

### Instructions

* Open `cart.test.js`.
* Create a test for the `cart` property:
  * This test should `expect` `cart` to be an empty Array.
    * Hint: test for type and length.
* Create a test for the `total` property: 
  * This test should `expect` the `total` property to be `0`.
    * Hint: test for value and type. `"0"` does not equal `0`.
* Create a test for the `addToCart` method:
  * This test should `expect` the `cart` length to increase by 1 on each call.
  * This test should `expect` the `car` object to appear at the end of the `cart` array.
* Create a test for the `addToCart` method:
  * This test should `expect` the `total` property to increase by the car object's price on each call.
* Create a test for the `removeFromCart` method:
  * This test should `expect` the `cart` length to decrease by 1 on each call.
  * This test should `expect` the `cart` array to maintain the order of car objects in the `cart` array.
    * For example remove( 3 ): [ 1, 2, 3, 4, 5 ] -> [ 1, 2, 4, 5 ]
* Create a test for the `removeFromCart` method:
  * This test should `expect` the `total` property to decrease by the car object's price on each call.
* Create a test for the `checkout` method:
  * This test should `expect` the `cart` length to equal `0`.
  * This test should `expect` the `total` property to equal `0`.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> cart.test.js </code> </summary>

```js
const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function() {
  test('Cart should default to an empty array.', function() {
    expect( Array.isArray( cart.cart ) ).toEqual( true );
    expect( cart.cart.length ).toEqual( 0 );
  });
  
  test('Total should default to 0.', function() {
    expect( cart.total ).toEqual( 0 );
    expect( typeof( cart.total ) ).toEqual( 'number' );
  });
});


describe('Cart Methods:', function() {
  afterEach(function() {
    cart.cart = [];
    cart.total = 0;
  });  

  test('addToCart() should add a car object to the cart array.', function() {
    cart.addToCart( cars[0] );
  
    expect( cart.cart.length ).toEqual( 1 );
    expect( cart.cart[0] ).toEqual( cars[0] );
  });

  test('addToCart() should increase the total property.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[8] );
    cart.addToCart( cars[2] );

    expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price );
  });
  
  test('removeFromCart() should remove a car object from the cart array.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[1] );
    cart.addToCart( cars[2] );
  
    cart.removeFromCart( 1, cars[1] );
  
    expect( cart.cart.length ).toEqual( 2 );
    expect( cart.cart[0] ).toEqual( cars[0] );
    expect( cart.cart[1] ).toEqual( cars[2] );
  });

  test('removeFromCart() should decrease the total property.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[8] );
    cart.addToCart( cars[2] );

    cart.removeFromCart( 0, cars[0] );
    cart.removeFromCart( 1, cars[2] );

    expect( cart.total ).toEqual( cars[8].price );
  });

  test('checkout() shoud empty the cart array and set total to 0.', function() {
    cart.addToCart( cars[0] );
    cart.addToCart( cars[1] );
    cart.addToCart( cars[2] );
    cart.addToCart( cars[3] );

    cart.checkout();

    expect( cart.cart.length ).toEqual( 0 );
    expect( cart.total ).toEqual( 0 );
  });
});
```

</details>

## Step 4

### Summary

In this step, you'll create the solutions to each method and property in `cart.js`. You can use the Unit Tests to determine when you have the correct answer. There won't be any detailed instructions for this step. Use the Unit Tests as a reference for when you have the correct answer. Take a look at the solution code only as a last resort.

### Instructions

* Open `cart.js`.
* Compelete the code for each `method` and `property` to make all the Unit Tests pass.

### Solution

<details>

<summary> <code> cart.js </code> </summary>

```js
const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function( car ) {
    this.cart.push( car );
    this.total += car.price;
  },

  removeFromCart: function( index, car ) {
    this.cart.splice( index, 1 );
    this.total -= car.price;
  },

  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};
```

</details>












## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
