/**
 * Created by pagel093 on 1/28/14.
 */
var assert = require("assert");
var udrd = require('./functions').udrd;

describe('save', function(){
   describe('content', function(){
       assert.equals(udrd.save("Blah"), "Blah");
   });

});

describe('Test Undo and Redo', function(){
    describe('Undo', function(){
        save("Blah1");
        save("1234")
        assert.equals(udrd.undo(), "Blah1");
        assert.equals(udrd.redo(), "1234");
    });

});