var posts=["2025/08/07/hello-world/","2025/08/07/123/","2025/08/07/4321/","2025/08/07/example/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };