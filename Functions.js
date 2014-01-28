/**
 * Created by pagel093 on 1/28/14.
 */

function udrd(){
    var saved = new Array();
    var index = 0;

    function save(){
        index = (index + 1) % 5
    }

    function undo(){
        if(index == 0)
            index = 5;
        else
            index--;
        return saved[index];

    }

    function redo(){
        index = (index + 1) % 5;
    }
}


module.exports.udrd = udrd;