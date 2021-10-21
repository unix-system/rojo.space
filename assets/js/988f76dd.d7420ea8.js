"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[628,213],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return p}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(o),p=n,u=g["".concat(l,".").concat(p)]||g[p]||m[p]||i;return o?r.createElement(u,a(a({ref:t},d),{},{components:o})):r.createElement(u,a({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},94152:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],s={sidebar_position:3,title:"Porting an Existing Game"},l=void 0,c={unversionedId:"getting-started/existing-game",id:"getting-started/existing-game",isDocsHomePage:!1,title:"Porting an Existing Game",description:"This document will go over some tips for porting an existing Roblox game to use Rojo. Because every game is different, this guide contains general advice and tips.",source:"@site/docs/getting-started/existing-game.md",sourceDirName:"getting-started",slug:"/getting-started/existing-game",permalink:"/docs/v6/getting-started/existing-game",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/docs/getting-started/existing-game.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Porting an Existing Game"},sidebar:"version-v0.5/tutorialSidebar",previous:{title:"Creating a New Game",permalink:"/docs/v6/getting-started/new-game"},next:{title:"Project Format",permalink:"/docs/v6/project-format"}},d=[{value:"Prepare Your Game",id:"prepare-your-game",children:[{value:"Move Code into Fewer Places",id:"move-code-into-fewer-places",children:[],level:3}],level:2},{value:"rbxlx-to-rojo",id:"rbxlx-to-rojo",children:[],level:2},{value:"Remodel",id:"remodel",children:[],level:2},{value:"Migrating Away from Rojo",id:"migrating-away-from-rojo",children:[],level:2}],m={toc:d};function g(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document will go over some tips for porting an existing Roblox game to use Rojo. Because every game is different, this guide contains general advice and tips."),(0,i.kt)("h2",{id:"prepare-your-game"},"Prepare Your Game"),(0,i.kt)("p",null,"Not all Roblox idioms translate to the filesystem well. If possible, it's easiest to refactor your game slightly to reduce reliance on these before introducing Rojo. Even if you don't adopt Rojo, these ideas may still improve your game's structure!"),(0,i.kt)("h3",{id:"move-code-into-fewer-places"},"Move Code into Fewer Places"),(0,i.kt)("p",null,"Inside Roblox, it is common to have scripts stashed away in instances like GUI components, parts in the main scene, or in objects like Tools."),(0,i.kt)("p",null,"Roblox games often also contain several copies of the same script, like old school lava bricks in an obstacle course, or the AI behavior for a zombie."),(0,i.kt)("p",null,"Most software projects outside Roblox have a single location, like a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", that all code goes into. By moving most of your code into services like ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicatedStorage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerScriptService"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"StarterPlayer"),", it becomes easier to find what you're looking for."),(0,i.kt)("p",null,"Rewriting this code to use modern Roblox features like ",(0,i.kt)("a",{parentName:"p",href:"https://developer.roblox.com/en-us/api-reference/class/CollectionService"},"CollectionService")," can make it easier to understand, easier to work on, and more friendly to Rojo."),(0,i.kt)("h2",{id:"rbxlx-to-rojo"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rojo-rbx/rbxlx-to-rojo"},"rbxlx-to-rojo")),(0,i.kt)("p",null,"There are ongoing efforts to make porting an existing game to Rojo more automatic. Currently, the most developed tool for this is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/rbxlx-to-rojo"},"rbxlx-to-rojo"),"."),(0,i.kt)("h2",{id:"remodel"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/Roblox/remodel"},"Remodel")),(0,i.kt)("p",null,"Another option for porting an existing game is to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Roblox/remodel"},"Remodel"),", which allows deep customization and would be suitable for porting a large, complex game."),(0,i.kt)("h2",{id:"migrating-away-from-rojo"},"Migrating Away from Rojo"),(0,i.kt)("p",null,"Migrating away from Rojo is very simple: start editing your Roblox place directly instead of the files on the filesystem!"),(0,i.kt)("p",null,"Because everything in Rojo turns into a normal Roblox place or model, you aren't locked into Rojo if you decide to try it for a small part of your game."))}g.isMDXComponent=!0},3156:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=o(94152),s=["components"],l={sidebar_position:3,title:"Porting an Existing Game"},c=void 0,d={unversionedId:"getting-started/existing-game",id:"version-v0.5/getting-started/existing-game",isDocsHomePage:!1,title:"Porting an Existing Game",description:"",source:"@site/versioned_docs/version-v0.5/getting-started/existing-game.md",sourceDirName:"getting-started",slug:"/getting-started/existing-game",permalink:"/docs/v0.5/getting-started/existing-game",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v0.5/getting-started/existing-game.md",tags:[],version:"v0.5",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Porting an Existing Game"},sidebar:"version-v0.5/tutorialSidebar",previous:{title:"Creating a New Game",permalink:"/docs/v0.5/getting-started/new-game"},next:{title:"Rojo Alternatives",permalink:"/docs/v0.5/rojo-alternatives"}},m=[],g={toc:m};function p(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.default,{mdxType:"Content"}))}p.isMDXComponent=!0}}]);