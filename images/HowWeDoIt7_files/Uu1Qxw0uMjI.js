;/*FB_PKG_DELIM*/

__d("PolarisClipsDesktopCommentsContainerPopoverPlaceholder.react",["PolarisPostCommentsContainerPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo,k={commentContainer:{width:"xh8yej3",$$css:!0}},l=168;function a(a){a=a.containerHeight;var b=Math.ceil(a/l);a=j(function(){return Array.from({length:b},function(a,b){return i.jsx(c("PolarisPostCommentsContainerPlaceholder.react"),{indexOffset:b*3,marginTop:b===0?2:void 0,xStyle:k.commentContainer},"comments-placeholder-"+b)})},[b]);return i.jsx("div",{className:"x10wlt62",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsDesktopCommentsPopoverQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7110328689095028"}),null);
__d("PolarisClipsTabDesktopClipPlaceholder.react",["IGDSBox.react","IGDSGlimmer.react","PolarisClipsTabHelpers","PolarisDsaQEHelpers","react","stylex","useThrottled"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useLayoutEffect,l=b.useState,m=b.unstable_useMemoCache,n={background:{backgroundColor:"x8x6lru",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",$$css:!0},glimmerColor:{backgroundColor:"x5keihi",$$css:!0},icon:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1gnnpzl",marginEnd:"x1emribx",marginLeft:null,marginRight:null,width:"x1849jeq",$$css:!0},longLine:{height:"x1kpxq89",width:"xycev2y",$$css:!0},margin:{marginTop:"x14vqqas",$$css:!0},shortLine:{height:"x1kpxq89",width:"x3hqpx7",$$css:!0}};function a(){var a=m(34),b=l(0),e=b[0],f=b[1];b=e*.5625;var g;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(){f(d("PolarisClipsTabHelpers").getReelMediaContainerHeight(d("PolarisDsaQEHelpers").hasTabbedReelsHeader()))},a[0]=g):g=a[0];var i=c("useThrottled")(g,d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE),o;a[1]!==i?(g=function(){i();window.addEventListener("resize",i);return function(){window.removeEventListener("resize",i)}},o=[i],a[1]=i,a[2]=g,a[3]=o):(g=a[2],o=a[3]);k(g,o);var p,q,r;if(a[4]!==e||a[5]!==b){g=d("PolarisClipsTabHelpers").getClipsContainerStyles();o=c("IGDSBox.react");q="column";r="flex";p=(h||(h=c("stylex")))(g.container);var s=e>0?e+"px":"100%",t=b>0?b+"px":void 0,u;a[12]!==s||a[13]!==t?(u={height:s,width:t},a[12]=s,a[13]=t,a[14]=u):u=a[14];a[15]===Symbol["for"]("react.memo_cache_sentinel")?(s=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[n.icon,n.glimmerColor]}),a[15]=s):s=a[15];a[16]===Symbol["for"]("react.memo_cache_sentinel")?(t=j.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",children:[s,j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[n.longLine,n.glimmerColor]})]}),a[16]=t):t=a[16];a[17]===Symbol["for"]("react.memo_cache_sentinel")?(s=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:[n.longLine,n.margin,n.glimmerColor]}),a[17]=s):s=a[17];a[18]===Symbol["for"]("react.memo_cache_sentinel")?(t=j.jsxs(c("IGDSBox.react"),{direction:"column",display:"flex",height:"100%",justifyContent:"end",padding:4,width:"100%",children:[t,s,j.jsx(c("IGDSGlimmer.react"),{index:2,xstyle:[n.shortLine,n.margin,n.glimmerColor]})]}),a[18]=t):t=a[18];s=j.jsx("div",{className:h([g.container,n.background]),style:u,children:t});u=h(g.ufi);a[4]=e;a[5]=b;a[6]=u;a[7]=p;a[8]=s;a[9]=o;a[10]=q;a[11]=r}else u=a[6],p=a[7],s=a[8],o=a[9],q=a[10],r=a[11];a[19]===Symbol["for"]("react.memo_cache_sentinel")?(t={height:"inherit"},a[19]=t):t=a[19];a[20]!==u?(g=j.jsx("div",{className:u,style:t}),a[20]=u,a[21]=g):g=a[21];a[22]!==p||a[23]!==s||a[24]!==g?(b=j.jsxs("div",{className:p,children:[s,g]}),a[22]=p,a[23]=s,a[24]=g,a[25]=b):b=a[25];t="calc(100vh - 32px - "+e+"px)";a[26]!==t?(u=j.jsx("div",{style:{height:t,width:"100%"}}),a[26]=t,a[27]=u):u=a[27];a[28]!==o||a[29]!==q||a[30]!==r||a[31]!==b||a[32]!==u?(p=j.jsxs(o,{direction:q,display:r,children:[b,u]}),a[28]=o,a[29]=q,a[30]=r,a[31]=b,a[32]=u,a[33]=p):p=a[33];return p}g["default"]=a}),98);
__d("PolarisClipsTabDesktopContainerElementProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));c=h;var j=c.useContext;c.useMemo;var k=c.useState,l=c.unstable_useMemoCache,m=i.createContext({element:null,setElement:function(){}});function a(a){var b=l(5);a=a.children;var c=k(null),d=c[0];c=c[1];b[0]!==d?(c={element:d,setElement:c},b[0]=d,b[1]=c):c=b[1];d=c;c=d;b[2]!==c||b[3]!==a?(d=i.jsx(m.Provider,{value:c,children:a}),b[2]=c,b[3]=a,b[4]=d):d=b[4];return d}function b(){return j(m)}g.PolarisClipsTabDesktopContainerElementProvider=a;g.usePolarisClipsTabDesktopContainerElementProvider=b}),98);
__d("PolarisClipsTabDesktopContainerLoggedOutQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7686579278066167"}),null);
__d("PolarisClipsTabDesktopContainerLoggedOutQuery$Parameters",["PolarisClipsTabDesktopContainerLoggedOutQuery_instagramRelayOperation","PolarisShareMenu.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisClipsTabDesktopContainerLoggedOutQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisClipsTabDesktopContainerLoggedOutQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PolarisShareMenurelayprovider:b("PolarisShareMenu.relayprovider")}}};e.exports=a}),null);
__d("PolarisClipsTabDesktopPage.react",["CometRelay","PolarisClipsTabDesktopContainerElementProvider.react","PolarisReactReduxDeprecationExports.react","cr:7148","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var c=i(6),e;c[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=b("cr:7148")&&j.jsx(b("cr:7148"),{}),c[0]=e):e=c[0];var f;c[1]!==a.props.routeParams.shortcode?(f={chainingMediaID:a.props.routeParams.shortcode},c[1]=a.props.routeParams.shortcode,c[2]=f):f=c[2];c[3]!==a.entryPoints.desktopContainerContent||c[4]!==f?(e=j.jsx(d("PolarisReactReduxDeprecationExports.react").PolarisReactReduxDeprecationProvider,{deprecateSubtree:!0,logLevel:"warn",children:j.jsx(d("PolarisClipsTabDesktopContainerElementProvider.react").PolarisClipsTabDesktopContainerElementProvider,{children:j.jsxs(j.Fragment,{children:[e,j.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:a.entryPoints.desktopContainerContent,props:f})]})})}),c[3]=a.entryPoints.desktopContainerContent,c[4]=f,c[5]=e):e=c[5];return e}g["default"]=a}),98);
__d("PolarisClipsTabDesktopPagePlaceholder.react",["IGDSBox.react","PolarisClipsTabDesktopClipPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"column",display:"flex",height:"100%",marginTop:8,width:"100%",children:j.jsx(c("PolarisClipsTabDesktopClipPlaceholder.react"),{})}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("PolarisClipsTabDesktopRoot.react",["CometPlaceholder.react","PolarisClipsTabDesktopPagePlaceholder.react","PolarisPageMetadata.react","PolarisShell.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisClipsTabDesktopPage.react").__setRef("PolarisClipsTabDesktopRoot.react"));function a(a){var b,d=i(7);b=(b=a.extraProps)==null?void 0:b.renderPageLayoutHandler;var e;d[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("PolarisPageMetadata.react"),{id:"reelsTab"}),d[0]=e):e=d[0];var f;d[1]===Symbol["for"]("react.memo_cache_sentinel")?(f=j.jsx(c("PolarisClipsTabDesktopPagePlaceholder.react"),{}),d[1]=f):f=d[1];d[2]!==a?(f=j.jsx(c("CometPlaceholder.react"),{fallback:f,children:j.jsx(k,babelHelpers["extends"]({},a))}),d[2]=a,d[3]=f):f=d[3];d[4]!==b||d[5]!==f?(a=j.jsxs(c("PolarisShell.react"),{footerVariant:"none",pageIdentifier:"reelsTab",renderPageLayoutHandler:b,children:[e,f]}),d[4]=b,d[5]=f,d[6]=a):a=d[6];return a}g["default"]=a}),98);
__d("PolarisClipsTabLoggedOutDesktop.entrypoint",["JSResourceForInteraction","PolarisClipsTabDesktopContainerLoggedOutQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{polarisClipsTabLoggedOutDesktopPageQuery:{options:{},parameters:c("PolarisClipsTabDesktopContainerLoggedOutQuery$Parameters"),variables:{data:{clips_media_id:a.routeProps.media_id}}}}}},root:c("JSResourceForInteraction")("PolarisClipsTabDesktopContainer.react").__setRef("PolarisClipsTabLoggedOutDesktop.entrypoint")};b=a;g["default"]=b}),98);
__d("PolarisClipsTabLoggedOutDesktopRoot.entrypoint",["JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","PolarisClipsTabLoggedOutDesktop.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{entryPoints:{desktopContainerContent:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("PolarisClipsTabLoggedOutDesktop.entrypoint"),entryPointParams:a})},extraProps:{renderPageLayoutHandler:!1},queries:{}}},root:c("JSResourceForInteraction")("PolarisClipsTabDesktopRoot.react").__setRef("PolarisClipsTabLoggedOutDesktopRoot.entrypoint")};g["default"]=a}),98);
__d("usePolarisClipsDesktopPopoverCloseOnScroll",["PolarisClipsTabDesktopContainerElementProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.unstable_useMemoCache;function a(a){var b=j(4),c=d("PolarisClipsTabDesktopContainerElementProvider.react").usePolarisClipsTabDesktopContainerElementProvider(),e=c.element,f;b[0]!==e||b[1]!==a?(c=function(){e==null?void 0:e.addEventListener("scroll",a);return function(){e==null?void 0:e.removeEventListener("scroll",a)}},f=[e,a],b[0]=e,b[1]=a,b[2]=c,b[3]=f):(c=b[2],f=b[3]);i(c,f)}g["default"]=a}),98);