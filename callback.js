// const posts=[
//     {title:'Post One',body:'This is post one',CreatedAt:new Date().getTime()},
//     {title:'Post Two',body:'This is post two',CreatedAt:new Date().getTime()}
// ];
// function getPosts() {
//   setTimeout(() => {
//     let output ='';
//     posts.forEach((post, index) => {
//         output +=`<li>${post.title} - created ${(new Date().getTime()- post.CreatedAt)/1000} seconds ago</li>`; 
        
//     });
//     document.body.innerHTML=output;
//   },1000);
// }
// console.log();
// function createPost(post , callback){
//     setTimeout(() => {
//         posts.push({...post,CreatedAt:new Date().getTime()});
//         callback();
//     }, 2000);

// }
// function create4thPost(post , callback){
//     setTimeout(() => {
//         posts.push({...post,CreatedAt:new Date().getTime()});
//         callback();
//     }, 3000);

// }

// createPost({title:'Post Three',body:'This is post three',CreatedAt:''},getPosts);
// create4thPost({title:'Post Four',body:'This is post four',CreatedAt:''},getPosts);

//  Trip to delhi to visit taj mahal 

// --------Using Callback----------------------------
//console.log("-------------Using CallBack-------------");
function thisMonthSalary(cb1,cb2,cb3){
    setTimeout(() => {
        console.log('Got this month salary'); 
        cb1(cb2,cb3); 
    }, 3000);
    
}

function buyTrainTickets(cb1,cb2){
    setTimeout(() => {
        console.log('Buy train tickets'); 
        cb1(cb2);
    }, 2000);
    
}

function travelToDelhi(cb){
    setTimeout(() => {
        console.log('Travel to Delhi with family'); 
        cb();  
    }, 1000);
    
}

function visitTajMahal(){
    setTimeout(() => {
        console.log('Visit TajMahal ');   
    }, 0);
    
}

thisMonthSalary(buyTrainTickets,travelToDelhi,visitTajMahal);

//--------------------Using Promise-------------------------

//console.log("-------------Using Promise---------------")

function thisMonthSalary1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Got this month salary'); 
            resolve('Got this month salary')
        }, 3000);  
    })
}

function buyTrainTickets2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Buy train tickets'); 
            resolve('Buy train tickets')
        }, 2000);  
    })
}

function travelToDelhi3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Travel to Delhi with family') 
              
        }, 1000);  
    })
}

function visitTajMahal4(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Visit TajMahal ')
            reject('Error: Something happened');   
        }, 0);  
    })
}

thisMonthSalary1().then((msg) =>{
console.log(msg);
buyTrainTickets2().then((msg2) =>{
    console.log(msg2);
    travelToDelhi3().then((msg3) =>{
        console.log(msg3);
        visitTajMahal4().then((msg4) =>{
            console.log(msg4)
        })

    })
})
})

//// ----------------------Using Async await--------------------------
async function fun1() {
    try{
    const m1 =await thisMonthSalary1();
    console.log(m1);
    const m2 = await buyTrainTickets2();
    console.log(m2);
    const m3 = await travelToDelhi3();
    console.log(m3);
    const m4 = await visitTajMahal4();
    console.log(m4); 
    }catch(err){
        console.log(err);
    }
}
fun1();




