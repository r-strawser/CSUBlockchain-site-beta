(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(199)},113:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(113),a(10)),c=a(11),s=a(13),m=a(12),u=a(14),p=a(98),h=a.n(p),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e={strings:["CSU Blockchain","Education","Innovation","Entrepreneurship"],typeSpeed:50,backSpeed:80,loop:!0,loopCount:1/0};this.typed=new h.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=this.props.webData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap-close",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#mission"},"Mission")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#photos"},"Team")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#cooperations"},"Partners")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("div",{className:"wrap"},r.a.createElement("h1",{className:"type-wrap"},r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},t.role),t.roleDescription,r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t.socialLinks&&t.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#mission"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return r.a.createElement("section",{id:"mission"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},e.mission&&e.mission.map(function(e){return r.a.createElement("div",{key:e.specialization,className:"row item"},r.a.createElement("div",{align:"center",className:"twelve columns"},r.a.createElement("h1",null,r.a.createElement("span",null,"Mission")),r.a.createElement("br",null),r.a.createElement("p",{className:"info"},e.specialization)))}))))}}]),t}(n.Component),E=(n.Component,n.Component,n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return r.a.createElement("section",{id:"contact",style:{background:"#fafbff"}},r.a.createElement("div",{className:"row",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("br",null),r.a.createElement("h4",null,"Contact us"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,"Addr: ",e.addr),r.a.createElement("br",null),r.a.createElement("span",null,"Email: ",e.email)),r.a.createElement("br",null),r.a.createElement("img",{src:"images/NewCSU-stacked.jpg",alt:"",style:{height:71.5}}))))}}]),t}(n.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return r.a.createElement("footer",{style:{background:"#fafbff"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.url},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{style:{background:"#69BE28"},className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"}))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/CSUBlockchain"},"\xa9"),"2021 CSU Blockchain\xa0|\xa0 All right reserved.\xa0 | Template By Cornell Club\xa0",r.a.createElement("br",null),"Cleveland State University, Cleveland, OH")))}}]),t}(n.Component),b={role:"Stay Tuned for dates of when we will be meeting!",name:"CSU Blockchain ",addr:"Cleveland State University",email:"r.m.strawser13@vikes.csuohio.edu",socialLinks:[{name:"twitter",url:"https://twitter.com/CSUBlockchain",className:"fa fa-twitter"},{name:"zoom",url:"https://zoom.us/",className:"fa fa-video-camera"},{name:"ins",url:"https://www.instagram.com/csu_blockchain/",className:"fa fa-instagram"}],mission:[{specialization:"The purpose of CSU Blockchain is to foster an ecosystem where students of varying disciplines have the opportunity to collaborate through discussion, innovation, and development of blockchain solutions while improving their understanding of blockchain technology through mentorship, guest speakers, and hosted events. CSU Blockchain gives members the opportunity to gain real-world experience and connections in a global network of professionals and students whether or not they are interested in pursuing a career in blockchain technology."}],portfolio:[{name:"CSU Blockchain Orientation",description:"Orienation",content:"Stay tuned for dates! We are in the process of adding a newsletter subscription for staying up to date with all things CSU Blockchain.",imgurl:"images/Logos/CSU-Blockchain/CSUB_logo_2.png",url:"www.google.com"}],PastPortfolio:[{name:"Project1",description:"past is past",content:"The night after his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/profilepic1.jpg",url:"www.google.com"},{name:"Project2",description:"mobileap2p",content:"We gonna change the world.",imgurl:"images/profilepic2.jpg",url:"www.google.com"}],testimonials:[{description:"What if giraffes could swim?",name:"Drake"},{description:"The internet was made with salad dressing.",name:"Yiming"},{description:"Who would win in a fight, a rhino or a hippo?",name:"Yan"}]},v=a(204),w=a(101),y=a(134),j=v.a.Meta,k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"photos",style:{background:"white"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h1",null,"Team"),r.a.createElement(w.a,null,r.a.createElement(y.a,{sm:4,md:4,lg:4}),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-ryan.jpg"})},r.a.createElement(j,{style:{fontSize:"15px"},title:"Ryan Strawser",description:"President"}))),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},"                  ",r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-shadi.jpg"})},r.a.createElement(j,{style:{fontSize:"15px"},title:"Shadi Zogheib",description:"Vice President"})))),r.a.createElement(w.a,null,r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-drew.jpg"})},r.a.createElement(j,{style:{fontSize:"15px"},title:"Drew Klausing",description:"Secretary"}))),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-megan.jpg"})},r.a.createElement(j,{style:{fontSize:"15px"},title:"Megan Keleman",description:"Treasurer"})))))),r.a.createElement("hr",null))}}]),t}(n.Component),N=a(202),O=(n.Component,v.a.Meta),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"photos",style:{background:"white"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h1",null,"Advisors"),r.a.createElement(w.a,null,r.a.createElement(y.a,{sm:4,md:4,lg:4}),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-zhao.jpg"})},r.a.createElement(O,{style:{fontSize:"15px"},title:"Dr.Wenbing Zhao",description:"Faculty Advisor"}))),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!0,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Headshots\\profile-pic-ray-1.jpg"})},r.a.createElement(O,{style:{fontSize:"15px"},title:"Dr. Brian Ray, J.D.",description:"Strategic Advisor"})))))),r.a.createElement("hr",null))}}]),t}(n.Component),C=a(203),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.webData,t=[],a=0;a<e.portfolio.length;a++)t.push({href:"".concat(e.portfolio[a].url),title:"".concat(e.portfolio[a].name),description:"".concat(e.portfolio[a].description),content:"".concat(e.portfolio[a].content),imgurl:"".concat(e.portfolio[a].imgurl)});return r.a.createElement("section",{id:"portfolio",style:{background:"#fafbff"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h1",null,"Events"),r.a.createElement(C.a,{itemLayout:"vertical",size:"default",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:t,renderItem:function(e){return r.a.createElement(C.a.Item,{key:e.title,extra:r.a.createElement("img",{id:"newportfolio_",width:200,alt:"logo",src:e.imgurl}),style:{textAlign:"justify"}},r.a.createElement(C.a.Item.Meta,{title:r.a.createElement("a",{href:e.href},e.title),description:e.description}),e.content)}}))))}}]),t}(n.Component),L=(n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"cooperations",style:{background:"white"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h1",null,"Partners"),r.a.createElement(w.a,null,r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!1,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Logos\\Encode-Club\\PNGs\\official-society_01.png"})})),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!1,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Logos\\BDU\\BDU-logo.png"})})),r.a.createElement(y.a,{xs:12,sm:8,md:8,lg:8},r.a.createElement(v.a,{hoverable:!1,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:r.a.createElement("img",{alt:"example",src:"images\\Logos\\CSU\\template-seal.jpg"})}))))))}}]),t}(n.Component)),B=a(205),D=a(18),U=(n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{webData:b}),r.a.createElement(g,{webData:b}),r.a.createElement(S,{webData:b}),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(E,{webData:b}),r.a.createElement(f,{webData:b}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(197);o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.1f8eae29.chunk.js.map