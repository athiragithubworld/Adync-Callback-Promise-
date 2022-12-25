const posts=[
    {title:'Post One',body:'This is post one',CreatedAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',CreatedAt:new Date().getTime()}
];

// function getPosts() {
//   setTimeout(() => {
//     let output ='';
//     posts.forEach((post, index) => {
//         output +=`<li>${post.title} - created ${(new Date().getTime()- post.CreatedAt)/1000} seconds ago - lastactivitytime ${new Date().getTime()} </li>`; 
            
//     });
//     // document.body.innerHTML=output;
//     console.log(output);
    
//   },1000);
// }

function createPost(post ){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
            posts.push({...post,CreatedAt:new Date().getTime()});
        //  console.log(posts);
            const error = false;
         if(!error){
            resolve(posts);
            // deletePost();
         } 
         else{
            reject('Error: Something went wrong')
         }
        }, 0000);
    });
}

const users = [{
    username:'Athi',
    lastactivitytime:new Date().getTime()
}];
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
  
        setTimeout(() => {
            
            users.lastactivitytime = new Date().getTime();
            // const usertime= console.log(" Last activity time after the post created : ",users.lastactivitytime);
            resolve(users.lastactivitytime)
        }, 2000); 
    
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()  =>{
            if(posts.length>0){
                posts.pop();
                resolve(posts);
                
            }
            else{
                reject('Array is Empty now')
            }
        },1000);
       
    });

}



Promise.all([createPost({title:'Post Three',body:'This is post three',CreatedAt:''}),updateLastUserActivityTime()])
.then((values) => {
console.log(values);
    
        deletePost().then((res) =>{
           console.log(res);
        //    createPost({title:'Post Four',body:'This is post four',CreatedAt:''}).then(()=>{
            // updateLastUserActivityTime();
           }) 
        
        // console.log(posts);  
    




// console.log(posts);
// const lasttime = updateLastUserActivityTime();
// console.log(" Last activity time after the post created : ",lasttime)
// return posts;
});




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
//     setTimeout(resolve,1000,'Goodbye')
// )


// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
//// ----------------------------------------------------------

// const users = [];
              


// function createNewUser(user){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // {...post,CreatedAt:new Date().getTime()}
//         //   console.log(user);
//           const usercreatedbefore = users.push(user);
//           const username1 = user.username;
//           const activitytime =user.lastactivitytime;
//         //   console.log(username1)
//           console.log(username1 ,"First Activity time :  " ,activitytime );
//           const err1 = false;
//           if(!err1){
//             resolve();
//           } 
//           else{
//             reject('Error: Something went wrong');
//           } 
//         }, 1000);

//     })

// }

//  function updatelastctivitytime () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(users[0].username);
//             users.lastactivitytime = new Date().getTime();
//             // console.log(users.username)
//             const usertime= console.log(" Last activity time : ",users.lastactivitytime);
//             resolve(usertime)
//         }, 1000);
//     })

//  } 

// function deleteuserPost(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()  =>{
//             if(users.length>0){
//                 resolve(users.pop(users.length-1));
//                 console.log(users);
//             }
//             else{
//                 reject('Array is Empty now')
//             }
//         },2000);
//     });
// }


// // const promise1 = 
// // const promise2 = createNewUser({username :'Athi555',lastactivitytime:new Date().getTime()});

// const p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve(createNewUser({username :'Athi123',lastactivitytime:new Date().getTime()})) 
//         updatelastctivitytime(); 
//     }, 1000);
        
// })

// const p2=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve(createNewUser({username :'XXX123',lastactivitytime:new Date().getTime()})) 
//         updatelastctivitytime(); 
//     }, 1000);
        
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         p1;
//         p2;
//         deleteuserPost();
//         //  return users;
//     }, 1000);
// })

// const p4=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve(createNewUser({username :'PPP123',lastactivitytime:new Date().getTime()})) 
//         updatelastctivitytime(); 
//          return users;
//     }, 4000);
// })

// // function userupdatepost(){
//     Promise.all([p3,p4])
//     .then(() =>{
//         // deleteuserPost();
//         // return users;

        
//     })
//     .catch(err => console.log('Error inside the create user',err))
// // }


// // ---------------------------------------------------------------------------------------
// // // function userupdatepost(){
// //     Promise.all([promise1, updatelastctivitytime])
// //     .then(([creatpostresolve , updatelastactivitytimer]) =>{
// //         console.log(" Last activity time " , updatelastactivitytimer)
        
// //     })
// //     .catch(err => console.log('Error inside the create user',err))
// // // }

// // --------------------------------------------------------------
// // const p1 = new Promise((resolve, reject) => {
// //     createNewUser();
// //     updatelastctivitytime();
// // })
// // const p2 = new Promise((resolve, reject) => {
// //     createNewUser();
// //     updatelastctivitytime();
// // })
// // Promise.all([p1,p2]).then()
// // .catch



