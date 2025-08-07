var posts=["2024/03/01/3D/","2022/08/01/example/","2025/05/01/achievement/","2024/06/01/SUN/","2025/08/07/hello-world/","2025/06/01/cable/","2024/10/29/love/","2025/07/07/plane/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };