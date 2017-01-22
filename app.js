/**
 * Created by zhannalibman on 22/01/2017.
 */

//Tests
    //for create:

var object = {"a":5};
var testArr = create([1,2,"hh"]);
var testArr1 = create([]);
// var testArr2 = create(object);

    //for add:
add(testArr, 100);
console.dir(testArr);
add(testArr1, "l");
console.dir(testArr1);
// add(object, 7);
// console.dir(object);

    //for get
console.log(get(testArr, 3));
// console.log(get(testArr, "j"));
// console.log(get(testArr, -1));
// console.log(get(testArr, 15));

    //for set
set(testArr, 0, "value");
// set(testArr, -1, "value");
// set(testArr, 10, "value");
// set(testArr, 2, undefined);
console.dir(testArr);




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
    return [].concat(values);
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
