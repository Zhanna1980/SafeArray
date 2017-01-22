/**
 * Created by zhannalibman on 22/01/2017.
 */

//tests
function test(initArr, index, value){
    try {
        var testArr = create(initArr);
        if(testArr != initArr){
            console.log("Failed at create.");
            return;
        }
        add(testArr, value);
        if (get(testArr, test.length - 1) !== value) {
            console.log("Failed at add or get");
            return;
        }
        set(testArr, index, value);
        if (get(testArr, index) !== value) {
            console.log("Failed at set.");
            return;
        }
        console.log("Test passed.")
    }catch (err){
        console.log(err.message);
    }
}

 test([0,"6"], 1, 100);
// test([0,"6"], -1, 100);
//  test([0,"6"], 2, 100);
// test({"a":5}, 5, 100);


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
