const posts = [
   {title: 'Post One', body:'Post One'},
   {title: 'Post Two', body:'Post Two'},   
]

function getPosts(){
 //setTimeout(function() {
   setTimeout(()=> {
      let output ='';
      posts.forEach((post, index)=>{
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML += output;
      console.log(`done callbacks.`)
   }, 1000)
}

function createPost(post, cb, de){
   setTimeout(()=>{
   posts.push(post);
   cb();
   de();
   },2000);
}

//getPosts();
createPost ({title: 'Post Three', body: 'Post Three'}, getPosts, getPosts);