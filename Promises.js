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
// //---------------------------------------------------------
// Promises.all
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve, reject) => 
    setTimeout(resolve,2000,'Goodbye')
)
Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
//// ----------------------------------------------------------




