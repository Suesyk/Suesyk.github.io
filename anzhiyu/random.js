var posts=["2024/03/01/3D/","2025/09/03/H2/","2022/09/01/example/","2025/07/16/country/","2024/10/29/love/","2025/09/01/resume/","2024/06/01/SUN/","2025/07/07/plane/","2022/09/01/daily/","2025/04/18/ssh_problem/","2024/10/06/pages/","2025/06/01/cable/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"中北大学","link":"https://www.nuc.edu.cn/","avatar":"https://s3.bmp.ovh/imgs/2025/08/30/f2563ae96a01b5fa.jpg","descr":"中北大学官网","siteshot":"https://s3.bmp.ovh/imgs/2025/08/30/ac89bb4153f595a9.png"},{"name":"研招网","link":"https://yz.chsi.com.cn/","avatar":"https://s3.bmp.ovh/imgs/2025/08/30/c4b541832fb4e7fc.png","descr":"中国研究生招生信息网","siteshot":"https://s3.bmp.ovh/imgs/2025/08/30/2976619f06adbe25.png"},{"name":"四六级","link":"https://cet.neea.edu.cn/","avatar":"https://s3.bmp.ovh/imgs/2025/08/30/18404286585489c7.png","descr":"全国大学英语四、六级考试","siteshot":"https://s3.bmp.ovh/imgs/2025/08/30/b49b32499873e3c2.png"},{"name":"Github","link":"https://github.com/","avatar":"https://s3.bmp.ovh/imgs/2025/08/30/73a31df37bc8c116.png","descr":"Github","siteshot":"https://s3.bmp.ovh/imgs/2025/08/30/53d7ffcdb1cb491a.png"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/"},{"name":"cookiesky","link":"https://cookiesky.cn/","avatar":"https://cookiesky.cn/img/HGTOOL.ico","descr":"test"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"cookiesky","link":"https://cookiesky.cn/","avatar":"https://cookiesky.cn/img/HGTOOL.ico","descr":"test"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };