/**
 * Created by zhannalibman on 22/01/2017.
 */
const safeArray = require("./app.js");
const create = safeArray.create;
const add = safeArray.add;
const get = safeArray.get;
const set = safeArray.set;

// const {create, add, get, set} = require("./safeArray");


test([0,"6"], 1, 100);
// test([0,"6"], -1, 100);
//  test([0,"6"], 2, 100);
// test({"a":5}, 5, 100);


function test(initArr, index, value){
    try {
        var testArr = create(initArr);
        if(!arraysEqual(testArr,initArr)){
            console.log("Failed at create.");
            return;
        }
        add(testArr, value);
        if(testArr[testArr.length - 1] !== value){
            console.log("Failed at add");
            return;
        }
        if (get(testArr, test.length - 1) !== value) {
            console.log("Failed at get");
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

function arraysEqual(arr1, arr2) {
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
