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
// function createPost(post ){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//             posts.push({...post,CreatedAt:new Date().getTime()});
//          const error = false;
//          if(!error){
//             resolve();
//             // deletePost();
//          } 
//          else{
//             reject('Error: Something went wrong')
//          }
//         }, 2000);
//     });
// }

// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()  =>{
//             if(posts.length>0){
//                 resolve(posts.pop());
//             }
//             else{
//                 reject('Array is Empty now')
//             }
//         },1000);
       
//     });

// }


// function create4thPost(post ){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//             posts.push({...post,CreatedAt:new Date().getTime()});
//          const error = false;
//          if(!error){
//             resolve();
//          } 
//          else{
//             reject('Error: Something went wrong')
//          }
//         }, 3000);
//     });
// }

// createPost({title:'Post Three',body:'This is post three',CreatedAt:''})
// .then(() => {
//     getPosts()
//     deletePost().then(()=>{
//     getPosts();
//     deletePost().then(() =>{
//         getPosts();
//         deletePost().then(() =>{
//             getPosts();
//             deletePost().then(() => {})
//             .catch((err) => {
//                 console.log('Inside catch block',err)

//             }) .catch(err => console.log('Inside catch block1',err));
//         }).catch(err => console.log('Inside catch block2',err));
//     }).catch(err => console.log('Inside catch block3',err));

//     }) .catch(err => console.log('Inside catch block4',err));
// })
// .catch(err => console.log('Inside catch block4',err));
// // //---------------------------------------------------------
// // Promises.all
// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve, reject) => 
//     setTimeout(resolve,2000,'Goodbye')
// )
// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
// //// ----------------------------------------------------------

const users = [];
              


function createNewUser(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // {...post,CreatedAt:new Date().getTime()}
        //   console.log(user);
          const usercreatedbefore = users.push(user);
          const username1 = user.username;
          const activitytime =user.lastactivitytime;
        //   console.log(username1)
          console.log(username1 ,"First Activity time :  " ,activitytime );
          const err1 = false;
          if(!err1){
            resolve();
          } 
          else{
            reject('Error: Something went wrong');
          } 
        }, 1000);

    })

}

 function updatelastctivitytime () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(user.username);
            users.lastactivitytime = new Date().getTime();
            // console.log(users.username)
            const usertime= console.log(" Last activity time : ",users.lastactivitytime);
            resolve(usertime)
        }, 1000);
    })

 } 

function deleteuserPost(){
    return new Promise((resolve, reject) => {
        setTimeout(()  =>{
            if(users.length>0){
                resolve(users.pop());
            }
            else{
                reject('Array is Empty now')
            }
        },1000);
    });
}


// const promise1 = 
// const promise2 = createNewUser({username :'Athi555',lastactivitytime:new Date().getTime()});

const p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve(createNewUser({username :'Athi123',lastactivitytime:new Date().getTime()})) 
        updatelastctivitytime(); 
    }, 1000);
        
})

const p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve(createNewUser({username :'XXX123',lastactivitytime:new Date().getTime()})) 
        updatelastctivitytime(); 
    }, 2000);
        
})

// function userupdatepost(){
    Promise.all([p1,p2,deleteuserPost])
    .then(() =>{
        console.log(users)
        
    })
    .catch(err => console.log('Error inside the create user',err))
// }


// ---------------------------------------------------------------------------------------
// // function userupdatepost(){
//     Promise.all([promise1, updatelastctivitytime])
//     .then(([creatpostresolve , updatelastactivitytimer]) =>{
//         console.log(" Last activity time " , updatelastactivitytimer)
        
//     })
//     .catch(err => console.log('Error inside the create user',err))
// // }

// --------------------------------------------------------------
// const p1 = new Promise((resolve, reject) => {
//     createNewUser();
//     updatelastctivitytime();
// })
// const p2 = new Promise((resolve, reject) => {
//     createNewUser();
//     updatelastctivitytime();
// })
// Promise.all([p1,p2]).then()
// .catch



