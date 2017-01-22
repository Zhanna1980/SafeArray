/**
 * Created by zhannalibman on 22/01/2017.
 */

//SafeArray
function get(arr, index){
    checkIfArray(arr);
    checkIndex(arr, index);
    return arr[index];
}

function set(arr, index, value){
    checkIfArray(arr);
    checkIndex(arr,index);
    arr[index] = value;
}

function add(arr, value){
    checkIfArray(arr);
    arr.push(value);
}
function create(values){
    checkIfArray(values);
    return values;
}

function checkIfArray(arr){
    if(!Array.isArray(arr)){
       throw Error("You've passed not an array");
    }
}

function checkIndex(arr, index){
    if(!Number.isInteger(index)){
        throw Error("Index has to be a number");
    }
    else if(index < 0 || index > arr.length - 1){
        throw Error("Index is out of bounds");
    }
}

// exports.create = create;
// exports.add = add;
// exports.get = get;
// exports.set = set;

module.exports = {
    create: create,
    add: add,
    get: get,
    set: set,
};

// module.exports = {
//     create,
//     add,
//     get,
//     set,
// };
