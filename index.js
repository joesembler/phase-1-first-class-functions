function receivesAFunction(callback){
    callback();
    return null;
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log("Hello");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    
    return function(){
        console.log("Hello");
    };
}