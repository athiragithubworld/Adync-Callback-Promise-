const posts=[
    {title:'Post One',body:'This is post one',CreatedAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',CreatedAt:new Date().getTime()}
];
function getPosts() {
  setTimeout(() => {
    let output ='';
    posts.forEach((post, index) => {
        output +=`<li>${post.title} - created ${(new Date().getTime()- post.CreatedAt)/1000} seconds ago</li>`; 
        
    });
    document.body.innerHTML=output;
  },1000);
}
console.log();
function createPost(post , callback){
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback();
    }, 2000);

}
function create4thPost(post , callback){
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback();
    }, 3000);

}

createPost({title:'Post Three',body:'This is post three',CreatedAt:''},getPosts);
create4thPost({title:'Post Four',body:'This is post four',CreatedAt:''},getPosts);