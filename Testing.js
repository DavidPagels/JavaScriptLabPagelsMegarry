/**
 * Created by pagel093 on 1/28/14.
 */
var assert = require("assert");
var udrd = require('./Functions').udrd;

describe('save', function(){
   describe('content', function(){
       it('should save the text', function(){
            var vari = udrd();
            assert.equal(vari.save("Blah"), "Blah");
       })
   });
    describe('saves', function(){
        it('it should wrap around and save over the one', function(){
            var vari =udrd();
            vari.save("1");
            vari.save("2");
            vari.save("3");
            vari.save("4");
            vari.save("5");
            assert.equal(vari.save("6"),"6");
            assert.equal(vari.undo(), "5");
            assert.equal(vari.undo(), "4");
            assert.equal(vari.undo(), "3");
            assert.equal(vari.undo(), "2");
            assert.equal(vari.undo(), "2");
        })
    });

});

describe('Test Undo and Redo', function(){
    describe('Undo', function(){
        it('it should save two things and undo to the first save then redo to the second',function(){
            var vari = udrd();
            vari.save("Blah1");
            vari.save("1234");
            assert.equal(vari.undo(), "Blah1");
            assert.equal(vari.redo(), "1234");
        })
    });
    describe('nasty test', function(){
        it('saves after an undo should ignore the ones after it', function(){
            var vari = udrd();
            vari.save("1");
            vari.save("2");
            vari.save("3");
            vari.save("4");
            vari.undo();
            vari.save("three");
            assert.equal(vari.redo(), "three");
            vari.undo();
            vari.undo();
            assert.equal(vari.undo(), "1")
        })
    });

});


describe('Test isTop and isBottom', function(){
    describe('isTop', function(){
        it('returns true when at the top of the redos', function(){
            var vari =udrd();
            vari.save("1");
            vari.save("2");
            assert.equal(vari.isTop(), true);
            vari.undo();
            assert.equal(vari.isTop(), false);
        })
    });

    describe('isBottom', function(){
        it('returns true when at the bottom of the undos', function(){
            var vari = udrd();
            vari.save("1");
            vari.save("2");
            assert.equal(vari.isBottom(), false);
            vari.undo();
            assert.equal(vari.isBottom(), true);
        })
    });

    describe('nasty test for isTop', function(){
        it('making the top and bottom at a different position in the array', function(){
            var vari = udrd();
            vari.save("1");
            vari.save("2");
            vari.save("3");
            vari.save("4");
            vari.save("5");
            vari.save("6");
            assert.equal(vari.isTop(), true);
            vari.undo();
            assert.equal(vari.isTop(), false);
            vari.undo();
            vari.undo();
            assert.equal(vari.isBottom(), false);
            vari.undo();
            assert.equal(vari.isBottom(), true);
        })
    });

});







