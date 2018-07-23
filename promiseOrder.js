//read README.md
let order = function(){ 

    return new Promise(function(resolve, reject){
        console.log(1);
        resolve(true);
    })
}


order()
.then(()=>{

    return new Promise(function(resolve, reject){

        setTimeout(() => {
            console.log(2)
            resolve(true);
        }, 2000);

    })
})
.then(()=>{
    
    console.log(3)
})
.then(()=>{

    console.log(4);
})
.catch(()=>{
    console.log('error')
})
