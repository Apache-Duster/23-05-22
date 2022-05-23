









function outer(){
    let name = "outer";
    function inner () {
        console.log(`hey, I'm inner, I was declared inside of ${name}`)
    }
    return inner;
}

let innerFn = outer();