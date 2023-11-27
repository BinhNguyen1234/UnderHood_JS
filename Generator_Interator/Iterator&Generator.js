const Iterable = {
    [Symbol.iterator] : function(){
        let step = 0;
        const aaa = {
            next : function (){
                step++;
                if(step === 1){
                    return { value: "This", done: false}
                }else if (step === 2) {
                    return { value: "is", done: false}
                } else if (step === 3){
                    return {value: "Iterable", done: false}
                }
                return {value: undefined, done: true}
            }
        }
        return aaa
    }
}

function * Generator(){
    for ( let a of Iterable){
        yield a
    }
}
const a = Generator();
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)