var posts=["2024/03/01/3D/","2024/06/01/SUN/","2025/07/16/country/","2024/10/01/daily/","2023/09/01/lesson-1-1/","2026/01/01/CNN-LSTM/","2022/09/01/example/","2025/06/01/cable/","2023/09/01/lesson-1-10/","2023/09/01/lesson-1-14/","2023/09/01/lesson-1-15/","2023/09/01/lesson-1-11/","2023/09/01/lesson-1-16/","2023/09/01/lesson-1-17/","2023/09/01/lesson-1-18/","2023/09/01/lesson-1-19/","2023/09/01/lesson-1-13/","2023/09/01/lesson-1-2/","2023/09/01/lesson-1-3/","2023/09/01/lesson-1-6/","2023/09/01/lesson-1-5/","2023/09/01/lesson-1-4/","2023/09/01/lesson-1-7/","2023/09/01/lesson-1-8/","2022/10/06/pages/","2023/09/01/lesson-1-9/","2024/10/29/love/","2023/09/01/lesson-1-12/","2025/09/01/resume/","2022/09/18/ssh_problem/","2025/08/27/plane/","2025/07/07/tea/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"中北大学","link":"https://www.nuc.edu.cn/","avatar":"/img/happy1.gif","descr":"中北大学官网"},{"name":"西电官网","link":"https://gr.xidian.edu.cn/","avatar":"/img/happy1.gif","descr":"西安电子科技大学官网"},{"name":"飞书","avatar":"https://www.feishu.cn/?from_site=lark","descr":"/img/happy1.gif"},{"name":"研招网","link":"https://yz.chsi.com.cn/","avatar":"/img/happy1.gif","descr":"中国研究生招生信息网"},{"name":"四六级","link":"https://cet.neea.edu.cn/","avatar":"/img/happy1.gif","descr":"全国大学英语四、六级考试"},{"name":"Github","link":"https://github.com/","avatar":"/img/happy1.gif","descr":"Github"},{"name":"志愿汇","link":"https://vms.zyh365.com/login/login.do","avatar":"/img/happy1.gif","descr":"志愿汇管理平台"},{"name":"知乎","link":"https://www.zhihu.com/signin?next=%2F","avatar":"/img/happy1.gif","descr":"技术交流"},{"name":"CSDN","link":"https://www.csdn.net/?spm=1001.2100.3001.4476","avatar":"/img/happy1.gif","descr":"技术交流"},{"name":"CNKI","link":"https://www.cnki.net/","avatar":"/img/happy1.gif","descr":"文献查询"},{"name":"X-MOL","link":"https://www.x-mol.com/","descr":"文献查询"},{"name":"API平台","link":"https://xfx.plus/home","avatar":"/img/happy2.gif"},{"name":"图床","link":"https://www.imgurl.org/","avatar":"/img/happy2.gif"},{"name":"Deepseek","link":"https://www.deepseek.com/","avatar":"/img/happy2.gif"},{"name":"Chatra","link":"https://app.chatra.io/conversations/my","avatar":"/img/happy2.gif"},{"name":"一元机场","link":"https://xn--4gq62f.com/","avatar":"/img/happy2.gif"},{"name":"阿里邮箱","link":"https://mail.aliyun.com/alimail/auth/login?reurl=%2Falimail%2Fentries%2Fv5.1%2Fmail%2Finbox%2Fall%2FeyJpZCI6IjJfMDpEenp6enlNeGhrUSQtLS0wV0dxZDJOTSIsInR5cGUiOiJtYWlsIiwiaXNEcmFmdE1haWwiOmZhbHNlfQ","avatar":"/img/happy2.gif"},{"name":"嘉立创EDA","link":"https://lceda.cn/","avatar":"/img/happy2.gif"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"/img/happy3.gif"},{"name":"cookiesky","link":"https://cookiesky.cn/","avatar":"/img/happy3.gif"}];
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