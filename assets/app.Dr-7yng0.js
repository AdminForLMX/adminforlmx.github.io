import{R as i}from"./chunks/theme.CwDk7L3u.js";import{ak as o,aw as u,ax as l,ay as c,az as f,aA as d,aB as m,aC as h,aD as A,aE as g,aF as w,d as y,a0 as C,o as P,h as v,aG as R,aH as E,aI as b,l as S}from"./chunks/framework.CkE-cstl.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=y({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=C();return P(()=>{v(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),E(),b(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=F(),a=x();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return A(T)}function F(){let e=o,a;return g(t=>{let n=w(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};
