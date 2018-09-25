const posts = [
   {title: 'Post One', body:'Post One'},
   {title: 'Post Two', body:'Post Two'},   
]

function getPosts(num){
 //setTimeout(function() {
      let output ='';
      posts.forEach((post, index)=>{
         output += `<li>${post.title} (${num})</li>`;
      });
      document.body.innerHTML += output;
      console.log(`done promises ${num}`)
}

function createPost(post){
   return new Promise((resolve, reject) => {
      setTimeout(()=>{
         posts.push(post);
         const error = false;          
         if (error){
            reject ('Error happened!');
         }else{
            resolve();
         }
      },3000);
   });
}

//createPost ({title: 'Post Three', body: 'Post Three'})
//.then(() => {
      //getPosts(2)
//});

createPost ({title: 'Post Three', body: 'Post Three'})
.then(getPosts(1));
