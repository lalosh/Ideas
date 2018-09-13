//read README.md
/*
a function to force a sequence of your code blocks using Promises

inside .then use only async or sync code..don't mix the two to sync and guarntee the order follow the next .then simply
*/
let order = function(){ 

    return new Promise(function(resolve, reject){
        console.log(1);
        resolve(true);
    })
}


order()
.then(()=>{
//want to use async code
    return new Promise(function(resolve, reject){

        setTimeout(() => {
            console.log(2)
            resolve(true);
        }, 2000);

    })
})
.then(()=>{
    //using normal sync code
    console.log(3)
})
.then(()=>{

    console.log(4);
})
.catch(()=>{
    console.log('error')
})
