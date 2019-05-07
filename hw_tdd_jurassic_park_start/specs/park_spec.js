const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 150, [])
  })

    it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });
    it('should have a ticket price', function(){
      const actual = park.ticketPrice;
      assert.strictEqual(actual, 150);
    });

    it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur('T-rex');
      const actual = park.collectionOfDinosaurs.length;
      assert.strictEqual(actual, 1);
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaur('T-rex');
      park.addDinosaur('Diplodocus');
      park.addDinosaur('Velociraptor');
      park.removeDinosaurByName('T-rex');
      const expected = ['Diplodocus', 'Velociraptor']
      const actual = park.collectionOfDinosaurs;
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to find the dinosaur that attracts the most visitors');

    it('should be able to find all dinosaurs of a particular species');

    it('should be able to remove all dinosaurs of a particular species');

});
