var posts=["2026/05/17/1/","2026/05/26/自由曲面光学基本概念与设计流程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };