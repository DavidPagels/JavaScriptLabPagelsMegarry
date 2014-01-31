/**
 * Created by pagel093 on 1/28/14.
 */

function udrd(){
    var saved = new Array();
    var index = 4;
    var top = index;
    return{
    save: function(content){
        index = (index + 1) % 5
        saved[index]=content;
        top = index;
        return saved[index];

    },

    undo: function(){
        var tempIndex = index;
        // making sure there isn't a null value
        if(index == 0)
            tempIndex = 4;
        else
            tempIndex--;

        // if not null and not wrapped around
        if(saved[tempIndex] != null && tempIndex != top){
            index = tempIndex;
            return saved[index];
        }else return saved[index];
    },

    redo: function(){
        if(index !=top ){
            index = (index + 1) % 5;
            return saved[index];
        }else return saved[index];
    },

    isTop: function(){
        return index == top;
    },

    isBottom: function(){
       return (top + 1) % 5 == index;
    }
}
}

module.exports.udrd = udrd;