"use strict";
function genericty(name) {
    return name;
}
let onlyGeneric = genericty(399);
let onlyarray = genericty([90, 35, 53]);
let onlynum = genericty("this is string data with generic");
let onlyBoolean = genericty(true);
console.log(onlyGeneric, onlynum, onlyBoolean, onlyarray);
