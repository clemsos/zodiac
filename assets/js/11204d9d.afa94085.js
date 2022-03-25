"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[609],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5466:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:5},c="Edit Roles",s={unversionedId:"tutorial-modifier-roles/edit-roles",id:"tutorial-modifier-roles/edit-roles",isDocsHomePage:!1,title:"Edit Roles",description:"You can add and remove members and targets in the edit role view. You can also select a target on the left side panel, and edit the permissions of that target in the right panel.",source:"@site/docs/tutorial-modifier-roles/edit-roles.md",sourceDirName:"tutorial-modifier-roles",slug:"/tutorial-modifier-roles/edit-roles",permalink:"/zodiac/docs/tutorial-modifier-roles/edit-roles",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-modifier-roles/edit-roles.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"View Roles",permalink:"/zodiac/docs/tutorial-modifier-roles/view-roles"},next:{title:"Get started",permalink:"/zodiac/docs/tutorial-module-bridge/get-started"}},d=[{value:"Functions",id:"functions",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:d};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edit-roles"},"Edit Roles"),(0,i.kt)("p",null,"You can add and remove members and targets in the edit role view. You can also select a target on the left side panel, and edit the permissions of that target in the right panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit Role view",src:r(2741).Z})),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Each target function can be allowed/revoked individually. You can also customize select a specific execution type for each function."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,'Click on the function to expand and view the parameters. To add a condition to a parameter click "+ add a condition" next to the parameter, select a condition from the select and enter an appropriate value. To delete an existing condition, click on the delete button.'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Please note that any changes you make to the role will not be saved to the role unless the "Update Role" button is clicked.')))}p.isMDXComponent=!0},2741:function(e,t,r){t.Z=r.p+"assets/images/roles_09-7e555e390dd586b267fd2835e6f1669c.png"}}]);