// Coding using promise
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('tickets');
    }, 3000);
})

// After resoving promise it get called

const getPopcorn = promiseWifeBringsTickets.then((t)=>{
    console.log('wife:I have the tickets');
    console.log('husband :we should go in');
    console.log('wife:No I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) =>{
    console.log('husband : I got some popcorn');
    console.log('husband : we should go in');
    console.log('wife:I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t)=>console.log(t));

console.log('person4:shows ticket');
console.log('person5:shows ticket');