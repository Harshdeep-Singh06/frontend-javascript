// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIfe
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('harsh')

