var datauser:number|string|boolean|string[];
datauser=30
if(typeof datauser=="number"){

    console.log("this is number")
}
else if(typeof datauser=="string"){
    console.log("this is string")
}
else if(typeof datauser=="boolean"){
    console.log("this is boolean dataype")
}else{
    console.log("this is not match")
}