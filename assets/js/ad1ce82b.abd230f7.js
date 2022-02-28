"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2252,5671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(72389),o=n(29548),i=n(86010);const s="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,c=e.block,d=e.defaultValue,m=e.values,u=e.groupId,k=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),b=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],A=w[1],D=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var I=b[u];null!=I&&I!==C&&g.some((function(e){return e.value===I}))&&A(I)}var x=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==C&&(E(t),A(a),null!=u&&y(u,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return D.push(e)},onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(N.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},96735:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s=void 0,p={unversionedId:"component_usage/Icon",id:"component_usage/Icon",title:"Icon",description:"Hint: use reverse to make your icon look like a button",source:"@site/docs/component_usage/Icon.mdx",sourceDirName:"component_usage",slug:"/component_usage/Icon",permalink:"/docs/next/component_usage/Icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/Icon.mdx",tags:[],version:"current",frontMatter:{}},c=[{value:"Available Icon Sets",id:"available-icon-sets",children:[],level:2},{value:"Custom Icon Fonts",id:"custom-icon-fonts",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Hint: use ",(0,l.kt)("strong",{parentName:"p"},"reverse")," to make your icon look like a button")),(0,l.kt)("h2",{id:"available-icon-sets"},"Available Icon Sets"),(0,l.kt)("p",null,"The icon sets in React Native Elements are made possible through\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"react-native-vector-icons"),"."),(0,l.kt)("p",null,"The current list of available icons sets are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://ant.design/components/icon/"},"antdesign")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.entypo.com/"},"entypo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://evil-icons.io/"},"evilicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://feathericons.com/"},"feather")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/v4.7.0/"},"font-awesome")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/"},"font-awesome-5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fontisto.com/icons"},"fontisto")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zurb.com/playground/foundation-icon-fonts-3"},"foundation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://ionicons.com/"},"ionicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://material.io/tools/icons"},"material")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"material-community")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://octicons.github.com/"},"octicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://simplelineicons.github.io/"},"simple-line-icon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://weloveiconfonts.com/"},"zocial"))),(0,l.kt)("p",null,"To check all the supported icons, visit ",(0,l.kt)("a",{parentName:"p",href:"https://oblador.github.io/react-native-vector-icons/"},"react-native-vector-icons directory")),(0,l.kt)("h2",{id:"custom-icon-fonts"},"Custom Icon Fonts"),(0,l.kt)("p",null,"Register your own custom icons by calling\n",(0,l.kt)("inlineCode",{parentName:"p"},"registerCustomIconType('customid', customFont)"),". Create a custom font by\nfollowing the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#custom-fonts"}," instructions for creating a custom font here"),".\nAlso, you can use ",(0,l.kt)("a",{parentName:"p",href:"http://fontello.com/"},"Fontello")," to generate custom icon\nfonts."),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20name%3D'rowing'%20%2F%3E%0A%0A%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20name%3D'g-translate'%0A%20%20%20%20%20%20%20%20color%3D'%2300aced'%20%2F%3E%0A%0A%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20name%3D'sc-telegram'%0A%20%20%20%20%20%20%20%20type%3D'evilicon'%0A%20%20%20%20%20%20%20%20color%3D'%23517fa4'%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20name%3D'ios-american-football'%0A%20%20%20%20%20%20%20%20type%3D'ionicon'%0A%20%20%20%20%20%20%20%20color%3D'%23517fa4'%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20raised%0A%20%20%20%20%20%20%20%20name%3D'heartbeat'%0A%20%20%20%20%20%20%20%20type%3D'font-awesome'%0A%20%20%20%20%20%20%20%20color%3D'%23f50'%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('hello')%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0},29014:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=(n(9877),n(58215),n(34738),n(96735)),i=["components"],s={id:"icon",title:"Icon"},p=void 0,c={unversionedId:"components/icon",id:"components/icon",title:"Icon",description:"Icons are visual indicators usually used to describe action or intent.",source:"@site/docs/components/Icon.mdx",sourceDirName:"components",slug:"/components/icon",permalink:"/docs/next/components/icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Icon.mdx",tags:[],version:"current",frontMatter:{id:"icon",title:"Icon"},sidebar:"docs",previous:{title:"Header",permalink:"/docs/next/components/header"},next:{title:"Image",permalink:"/docs/next/components/image"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Icons are visual indicators usually used to describe action or intent.\nThey are also used for displaying information."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#props"},"Text")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Component")),(0,l.kt)("td",{parentName:"tr",align:null},"React Component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,l.kt)("td",{parentName:"tr",align:null},"Update React Native Component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"brand")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the brands font (FontAwesome5 only).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add styling to container holding icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Disables onPress events. Only works when ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress")," has a handler.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabledStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for the button when disabled. Only works when ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress")," has a handler.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconProps")),(0,l.kt)("td",{parentName:"tr",align:null},"IconProps"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Provide all props from react-native Icon component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"raised")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Adds box shadow to button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reverse")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Reverses color scheme.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reverseColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify reverse icon color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"solid")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the solid font.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"material")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of icon set. ",(0,l.kt)("a",{parentName:"td",href:"#available-icon-sets"},"Supported sets here"),"."))))))}u.isMDXComponent=!0}}]);