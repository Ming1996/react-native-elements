(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(260)),i={id:"troubleshooting",title:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"version-3.3.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Although we try to make the experience of using React Native Elements",source:"@site/versioned_docs/version-3.3.0/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.3.0/troubleshooting.md",version:"3.3.0",sidebar:"version-3.3.0/docs",previous:{title:"Usage on the Web",permalink:"/docs/web_usage"},next:{title:"Avatar",permalink:"/docs/avatar"}},l=[{value:"|&gt; Invariant Violation: Element type is invalid",id:"-invariant-violation-element-type-is-invalid",children:[{value:"You incorrectly spelt a component",id:"you-incorrectly-spelt-a-component",children:[]},{value:"Importing a component from the wrong version",id:"importing-a-component-from-the-wrong-version",children:[]}]},{value:"|&gt; &quot;fontFamily (font-name) is not a system font",id:"-fontfamily-font-name-is-not-a-system-font",children:[{value:"Using <code>react-native-init</code>",id:"using-react-native-init",children:[]},{value:"Using an Expo app (create-react-native-app or Expo XDE)",id:"using-an-expo-app-create-react-native-app-or-expo-xde",children:[]},{value:"Using a detached <code>create-react-native-app</code> app",id:"using-a-detached-create-react-native-app-app",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Although we try to make the experience of using React Native Elements\nhassle-free, time to time you may encounter some problems along the way."),Object(o.b)("p",null,"On this page you can find solutions to commonly encountered issues."),Object(o.b)("h2",{id:"-invariant-violation-element-type-is-invalid"},"|> Invariant Violation: Element type is invalid"),Object(o.b)("p",null,"This error occurs when trying to import a component that doesn't exist. This\nusually happens for a few reasons:"),Object(o.b)("h3",{id:"you-incorrectly-spelt-a-component"},"You incorrectly spelt a component"),Object(o.b)("p",null,"Spelling a component incorrectly though very simple, happens occasionally."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"// Incorrect\nimport { Listitem } from 'react-native-elements'\n\n// Correct\nimport { ListItem } from 'react-native-elements'\n")),Object(o.b)("h3",{id:"importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version"),Object(o.b)("p",null,"This error occurs when you're trying to use a component from the wrong version.\nAt RNE they're some components that are only available in some versions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"Example:\n\n`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only\navailable in `v1.0.0-beta1` and higher.\n")),Object(o.b)("p",null,"To fix this, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check your ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," for the version of ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-elements")," you are\nusing."),Object(o.b)("li",{parentName:"ol"},"View the documentation for your particular version on the website. See\navailable versions\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/versions"}),"here"),"\nor click the version number next to the logo in the header."),Object(o.b)("li",{parentName:"ol"},"Checking the list of components on the left side bar, make sure you're using\nthe right component.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"-fontfamily-font-name-is-not-a-system-font"},'|> "fontFamily (font-name) is not a system font'),Object(o.b)("p",null,"This is a general error in react native, where you in your code, or a package\nyou are using, is trying to use a font that is not bundled with the platform or\nis not added to the project."),Object(o.b)("p",null,"If you aren't using a custom font in your application, then it's likely that\nthe error comes from React Native Elements looking for\n",Object(o.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),Object(o.b)("p",null,"They're a couple ways to solve this depending on your setup."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-react-native-init"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-init"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-an-expo-app-create-react-native-app-or-expo-xde"}),Object(o.b)("inlineCode",{parentName:"a"},"create-react-native-app or Expo XDE"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-a-detached-create-react-native-app-app"}),Object(o.b)("inlineCode",{parentName:"a"},"Detached create-react-native-app")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"using-react-native-init"},"Using ",Object(o.b)("inlineCode",{parentName:"h3"},"react-native-init")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Delete everything to be sure")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rm -rf node_modules yarn.lock package-lock.json\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Install React Native Elements")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install && npm install react-native-elements --save\n\n# yarn\nyarn && yarn add react-native-elements\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install react-native-vector-icons")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install react-native-vector-icons --save\n\n# yarn\nyarn add react-native-vector-icons\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Link react-native-vector-icons. Learn more about\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactnative.dev/docs/linking.html"}),"linking"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"react-native link react-native-vector-icons\n")),Object(o.b)("p",null,"If you encounter any red error screens during the process, try running these\ncommands:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"Unrecognized font x"'),Object(o.b)("p",{parentName:"blockquote"},"iOS - ",Object(o.b)("inlineCode",{parentName:"p"},"rm -rf ios/build")),Object(o.b)("p",{parentName:"blockquote"},"Android - ",Object(o.b)("inlineCode",{parentName:"p"},"rm -rf android/build && rm -rf android/app/build"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),Object(o.b)("p",{parentName:"blockquote"},"npm -",Object(o.b)("inlineCode",{parentName:"p"},"rm -rf node_modules && npm i")),Object(o.b)("p",{parentName:"blockquote"},"yarn - ",Object(o.b)("inlineCode",{parentName:"p"},"rm -rf node_modules && yarn"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"npm start -- --reset-cache"))),Object(o.b)("h3",{id:"using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Delete everything to be sure")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rm -rf node_modules yarn.lock package-lock.json\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Install React Native Elements")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install && npm install react-native-elements --save\n\n# yarn\nyarn && yarn add react-native-elements\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install ",Object(o.b)("inlineCode",{parentName:"li"},"@expo/vector-icons"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install @expo/vector-icons --save\n\n# yarn\nyarn add @expo/vector-icons --save\n")),Object(o.b)("h3",{id:"using-a-detached-create-react-native-app-app"},"Using a detached ",Object(o.b)("inlineCode",{parentName:"h3"},"create-react-native-app")," app"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you choose a regular React Native project, use\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-react-native-init"}),"Solution 1")),Object(o.b)("li",{parentName:"ul"},"If you choose to use Expo SDK (ExpoKit), use\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#using-an-expo-app-create-react-native-app-or-expo-xde"}),"Solution 2"))))}b.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);