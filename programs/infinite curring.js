function infiniteAdd(param1){
    return function(param2){
        if(!param2) return param1;
        return infiniteAdd(param1+param2);
    }
}

console.log(infiniteAdd(1)(2)(3)(4)())