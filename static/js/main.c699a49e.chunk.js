(this.webpackJsonpmypp=this.webpackJsonpmypp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(2),o=a.n(s),r=(a(13),a(3)),u=a(4),l=a(6),c=a(5),d=a(7),m=(a(14),function(e){return i.a.createElement("input",{className:"search",placeholder:e.placeholder,onChange:e.handlesearch})}),p=(a(15),function(e){return i.a.createElement("div",{className:"card-container"},i.a.createElement("h2",null,e.post.title),i.a.createElement("h2",null,e.post.key),i.a.createElement("p",null,e.post.body))}),h=[{userId:1,id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{userId:1,id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{userId:1,id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{userId:1,id:4,title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{userId:1,id:5,title:"nesciunt quas odio",body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}],v=(a(16),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handlesearch=function(e){a.setState({searchfield:e.target.value})},a.state={posts:h,searchfield:"",loading:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t,loading:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.posts.filter((function(t){return t.title.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"DSC Posts"),i.a.createElement(m,{placeholder:"search here",handlesearch:this.handlesearch}),!1===this.state.loading?i.a.createElement("div",{className:"card-list"},t.map((function(e){return i.a.createElement(p,{key:e.id,post:e})}))):i.a.createElement("h1",null,"Loading..."))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c699a49e.chunk.js.map