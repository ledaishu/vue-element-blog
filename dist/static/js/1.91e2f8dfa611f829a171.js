webpackJsonp([1],{BLeD:function(t,e){},JMhX:function(t,e){},S1tF:function(t,e){},bHS4:function(t,e){},jyJg:function(t,e,s){"use strict";var i=s("lC5x"),a=s.n(i),l=s("J0Oq"),n=s.n(l),r=s("4YfN"),c=s.n(r),o=s("b8UZ"),u=s("gyMJ"),d={data:function(){return{activeName:"newest",type:1,pageNum1:1,pageNum2:1,userid:0,plateid:0}},props:{nowPage:Number},computed:c()({},Object(o.b)(["hotArticleList","newArticleList","homeSelectPlate","centerSelectPlate","hotArticleListLen","newArticleListLen","enterUserId","loginUserId","isLogin"])),mounted:function(){this.userid=this.enterUserId,2==this.nowPage&&(this.plateid=this.centerSelectPlate),this.getArticle(this.plateid,this.userid,1)},methods:{handleClick:function(t,e){var s=e.target.getAttribute("id");this.type="tab-hot"==s?2:1},handleCurrentChange1:function(t){this.pageNum1=t},handleCurrentChange2:function(t){this.pageNum2=t},getArticle:function(t,e,s){1===this.nowPage?1==this.type?this.$store.dispatch("getNewArticleList",{plateid:t,userid:0,pageNum:s}):this.$store.dispatch("getHotArticleList",{plateid:t,userid:0,pageNum:s}):1==this.type?this.$store.dispatch("getNewArticleList",{plateid:t,userid:e,pageNum:s}):this.$store.dispatch("getHotArticleList",{plateid:t,userid:e,pageNum:s})},del:function(t){var e=this;this.$confirm("此操作将永久删除该文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n()(a.a.mark(function s(){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(u.f)(t);case 2:1===s.sent.status&&e.$message({type:"success",message:"删除成功!"});case 4:case"end":return s.stop()}},s,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})})}},watch:{homeSelectPlate:function(t){this.plateid=t,this.getArticle(t,this.userid,1)},centerSelectPlate:function(t){console.log(t+"选中的版块"),this.plateid=t,this.getArticle(t,this.userid,1)},type:function(t){this.getArticle(this.plateid,this.userid,1)},pageNum1:function(t){this.getArticle(this.plateid,this.userid,t)},pageNum2:function(t){this.getArticle(this.plateid,this.userid,t)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"articleTab"},[s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"最新文章",name:"newest"}},[s("ul",{staticClass:"article-tab-list"},t._l(t.newArticleList,function(e,i){return s("li",{key:i,staticClass:"article-tab-item"},[s("div",{staticClass:"article-tab-title"},[s("router-link",{attrs:{tag:"h4",to:"/articledetail/"+e.id}},[s("i",{staticClass:"el-icon-document",staticStyle:{color:"#409EFF"}}),t._v(" "+t._s(e.title))])],1),t._v(" "),s("div",{staticClass:"article-tab-profile"},[s("p",[t._v("\n              "+t._s(e.content)+"\n            ")])]),t._v(" "),s("div",{staticClass:"clearfix"},[s("div",{staticClass:"article-tab-time fl"},[s("span",[s("i",{staticClass:"el-icon-user",staticStyle:{color:"#67C23A"}}),t._v(" "),s("router-link",{attrs:{tag:"span",to:"/personalcenter/"+e.userId}},[t._v("作者："+t._s(e.nickName))])],1),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",[s("i",{staticClass:"el-icon-timer",staticStyle:{color:"#E6A23C"}}),t._v(" 时间："+t._s(e.publishTime))])],1),t._v(" "),s("div",{staticClass:"article-tab-num fr"},[s("span",[s("i",{staticClass:"el-icon-view",staticStyle:{color:"#909399"}}),t._v(" 阅读数："+t._s(e.clickNum))]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",[s("i",{staticClass:"el-icon-chat-line-round",staticStyle:{color:"#909399"}}),t._v(" 评论数："+t._s(e.commentNum))]),t._v(" "),t.enterUserId===t.loginUserId&&t.isLogin?s("span",{staticClass:"mg-left-15"},[s("router-link",{staticClass:"blue",attrs:{tag:"span",to:"/editarticle/"+e.id}},[t._v("编辑")]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",{staticClass:"red",on:{click:function(s){return t.del(e.id)}}},[t._v("删除")])],1):t._e()],1)])])}),0),t._v(" "),s("el-pagination",{staticClass:"pager",attrs:{background:"",layout:"prev, pager, next",total:t.newArticleListLen,"page-size":10,"current-page":t.pageNum1},on:{"current-change":t.handleCurrentChange1}})],1),t._v(" "),s("el-tab-pane",{attrs:{label:"热门文章",name:"hot"}},[s("ul",{staticClass:"article-tab-list"},t._l(t.hotArticleList,function(e,i){return s("li",{key:i,staticClass:"article-tab-item"},[s("div",{staticClass:"article-tab-title"},[s("router-link",{attrs:{tag:"h4",to:"/articledetail/"+e.id}},[s("i",{staticClass:"el-icon-document",staticStyle:{color:"#409EFF"}}),t._v("  "+t._s(e.title))])],1),t._v(" "),s("div",{staticClass:"article-tab-profile"},[s("p",[t._v("\n              "+t._s(e.content)+"\n            ")])]),t._v(" "),s("div",{staticClass:"clearfix"},[s("div",{staticClass:"article-tab-time fl"},[s("span",[s("i",{staticClass:"el-icon-user",staticStyle:{color:"#67C23A"}}),t._v(" 作者："+t._s(e.nickName))]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",[s("i",{staticClass:"el-icon-timer",staticStyle:{color:"#E6A23C"}}),t._v(" "+t._s(e.publishTime))])],1),t._v(" "),s("div",{staticClass:"article-tab-num fr"},[s("span",[s("i",{staticClass:"el-icon-view",staticStyle:{color:"#909399"}}),t._v(" 阅读数："+t._s(e.clickNum))]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",[s("i",{staticClass:"el-icon-chat-line-round",staticStyle:{color:"#909399"}}),t._v(" 评论数："+t._s(e.commentNum))]),t._v(" "),t.enterUserId===t.loginUserId&&t.isLogin?s("span",{staticClass:"mg-left-15"},[s("router-link",{staticClass:"blue",attrs:{tag:"span",to:"/editarticle/"+e.id}},[t._v("编辑")]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",{staticClass:"red",on:{click:function(s){return t.del(e.id)}}},[t._v("删除")])],1):t._e()],1),t._v(" "),s("div")])])}),0),t._v(" "),s("el-pagination",{staticClass:"pager",attrs:{background:"",layout:"prev, pager, next",total:t.hotArticleListLen,"page-size":10,"current-page":t.pageNum2},on:{"current-change":t.handleCurrentChange2}})],1)],1)],1)},staticRenderFns:[]};var v=s("C7Lr")(d,p,!1,function(t){s("JMhX")},null,null);e.a=v.exports},"n/G1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),a=s.n(i),l=s("b8UZ"),n={data:function(){return{clickPlateId:0}},computed:a()({},Object(l.b)(["allPlates"])),mounted:function(){this.$store.dispatch("getAllPlates")},methods:{setHomeSelectPlate:function(t){this.clickPlateId=t,this.$store.dispatch("setHomeSelectPlate",t)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"leftMenu"},[s("ul",{staticClass:"platelist"},[s("li",{staticClass:"platelist-item",class:{active:0===t.clickPlateId},on:{click:function(e){return t.setHomeSelectPlate(0)}}},[s("p",[t._v("推荐")])]),t._v(" "),t._l(t.allPlates,function(e,i,a){return s("li",{key:e.id,staticClass:"platelist-item",class:{active:t.clickPlateId===e.id},on:{click:function(s){return t.setHomeSelectPlate(e.id)}}},[s("p",[t._v(t._s(e.plateName))])])})],2)])},staticRenderFns:[]};var c=s("C7Lr")(n,r,!1,function(t){s("nbwE")},null,null).exports,o=s("jyJg"),u={computed:a()({},Object(l.b)(["topIntegralUser"])),mounted:function(){this.$store.dispatch("getTopIntegralUser"),console.log(this.topIntegralUser)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topIntegralUser"},[t._m(0),t._v(" "),i("div",{staticClass:"integralUser-list"},[i("ul",t._l(t.topIntegralUser,function(e,a){return a<5?i("li",{key:a,staticClass:"integralUser-item clearfix"},[i("div",{staticClass:"integralUser-img fl"},[i("router-link",{attrs:{to:"/personalcenter/"+e.id}},[i("img",{attrs:{src:s("jv0K"),alt:""}})])],1),t._v(" "),i("div",{staticClass:"integralUser-txt fl"},[i("router-link",{staticClass:"userName",attrs:{tag:"p",to:"/personalcenter/"+e.id}},[t._v(t._s(e.nickName))]),t._v(" "),i("p",[t._v("积分："),i("span",{staticClass:"integralSpan"},[t._v(t._s(e.integral))])]),t._v(" "),i("p",{staticClass:"integralUser-label"},[t._v(t._s(e.signatrue))])],1)]):t._e()}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topIntegral_header"},[e("h3",[e("i",{staticClass:"el-icon-s-flag"}),this._v(" 积分牛人")])])}]};var p=s("C7Lr")(u,d,!1,function(t){s("S1tF")},null,null).exports,v=s("AjrE"),_={computed:a()({},Object(l.b)(["allPlates"]),{hotPlates:function(){return this.sortKey(this.allPlates,"articleNum")}}),mounted:function(){this.$store.dispatch("getAllPlates")},methods:{sortKey:function(t,e){return t.sort(function(t,s){var i=t[e],a=s[e];return i>a?-1:i<a?1:0})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topPlate"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"topPlate-list"},[s("ul",t._l(t.hotPlates,function(e,i){return i<5?s("li",{key:e.id,staticClass:"topPlate-item clearfix"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"grid-content bg-purple"},[s("p",{staticClass:"plate-grade"},[t._v(t._s(i+1))])])]),t._v(" "),s("el-col",{attrs:{span:20}},[s("div",{staticClass:"grid-content bg-purple plate-grade-txt"},[s("div",{staticClass:"clearfix"},[s("p",{staticClass:"fl"},[t._v(t._s(e.plateName))]),t._v(" "),s("p",{staticClass:"fr"},[t._v("文章数："+t._s(e.articleNum))])]),t._v(" "),s("p",{staticClass:"plate-desc"},[t._v(t._s(e.description))])])])],1)],1):t._e()}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topPlate_header"},[e("h3",[e("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#F56C6C"}}),this._v(" 热门版块")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"banner3",attrs:{src:s("rLH5"),alt:""}})])}]};var h=s("C7Lr")(_,g,!1,function(t){s("BLeD")},null,null).exports,m=(s("gyMJ"),{data:function(){return{}},components:{LeftMenu:c,ArticleTab:o.a,TopIntegralUser:p,AboutUs:v.a,TopPlate:h},methods:{}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("img",{staticClass:"banner",attrs:{src:s("omhf"),alt:""}}),t._v(" "),i("div",{staticClass:"container"},[i("el-row",{staticClass:"center_content",attrs:{gutter:15}},[i("el-col",{attrs:{span:1}},[t._v("\n         \n      ")]),t._v(" "),i("el-col",{attrs:{span:2}},[i("div",{staticClass:"grid-content bg-purple"},[i("LeftMenu")],1)]),t._v(" "),i("el-col",{staticClass:"article-content",attrs:{span:15}},[i("div",{staticClass:"grid-content bg-purple"},[i("ArticleTab",{attrs:{nowPage:1}})],1)]),t._v(" "),i("el-col",{attrs:{span:5}},[i("div",{staticClass:"grid-content bg-purple"},[i("TopPlate")],1),t._v(" "),i("div",{staticClass:"grid-content bg-purple mg-top-15"},[i("TopIntegralUser")],1),t._v(" "),i("div",{staticClass:"grid-content bg-purple mg-top-15"},[i("AboutUs")],1)]),t._v(" "),i("el-col",{attrs:{span:1}},[i("div",{staticClass:"grid-content bg-purple"},[t._v("\n           \n        ")])])],1)],1)])},staticRenderFns:[]};var C=s("C7Lr")(m,f,!1,function(t){s("bHS4")},null,null);e.default=C.exports},nbwE:function(t,e){},omhf:function(t,e,s){t.exports=s.p+"static/img/banner.c470895.jpg"},rLH5:function(t,e,s){t.exports=s.p+"static/img/banner3.816a71a.jpg"}});
//# sourceMappingURL=1.91e2f8dfa611f829a171.js.map