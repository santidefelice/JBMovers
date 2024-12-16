;/*FB_PKG_DELIM*/

__d("PolarisSponsoredPersistentCTAThumbnail.react",["fbt","PolarisThumbnail.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i;function a(a){var b=j(3);a=a.thumbnailImageSrc;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=h._("__JHASH__ePItbjSnMcH__JHASH__"),b[0]=d):d=b[0];b[1]!==a?(d=k.jsx(c("PolarisThumbnail.react"),{alt:d,dimension:32,src:a}),b[1]=a,b[2]=d):d=b[2];return d}g["default"]=a}),226);
__d("PolarisMobileSponsoredPersistentCTA.react",["InstagramODS","InstagramWebAdEventsAuditFalcoEvent","PolarisClickEventLoggerProvider.react","PolarisErrorBoundary.react","PolarisPostFooterCTA.react","PolarisPostUtils","PolarisSponsoredPersistentCTAThumbnail.react","PolarisTrackingCodeProvider.react","PolarisTrackingNodeProvider.react","getPolarisPostIdFromNativeId","polarisAdsSelectors.react","polarisPostSelectors","react","usePolarisSelector","usePolarisSponsoredPostCTAFooterDominantColor"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.unstable_useMemoCache,l=60;function m(a){var b=k(27),d=a.bottomOffset,e=a.ctaAdditionalAnimation,f=a.ctaLinkText,g=a.domColor,h=a.entryPoint,m=a.externalURL,n=a.mediaId,o=a.mpk,p=a.post,q=a.socialContextType,r=a.thumbnailImageSrc,s=a.trackingToken;a=c("usePolarisSponsoredPostCTAFooterDominantColor")({isMediaRendered:!0,mediaId:n,post:p});n=a.ctaFooterViewpointRef;b[0]!==s||b[1]!==q||b[2]!==h?(p=function(){c("InstagramODS").incr("web.ads.feed.link_click"),c("InstagramWebAdEventsAuditFalcoEvent").log(function(){return{client_token:s,event:"persistent_cta_click",social_context_type:q}}),h!==null&&h==="story"?c("InstagramODS").incr("web.ads.story.msite_persistent_link_click"):c("InstagramODS").incr("web.ads.feed.persistent_link_click")},b[0]=s,b[1]=q,b[2]=h,b[3]=p):p=b[3];a=p;d=l+((p=d)!=null?p:0)+"px";b[4]!==d?(p={bottom:d},b[4]=d,b[5]=p):p=b[5];d=p;var t;b[6]!==h?(p=function(){h!==null&&h==="story"?c("InstagramODS").incr("web.ads.story.msite_persistent_cta_rendered"):c("InstagramODS").incr("web.ads.feed.persistent_cta_rendered")},t=[h],b[6]=h,b[7]=p,b[8]=t):(p=b[7],t=b[8]);j(p,t);b[9]===Symbol["for"]("react.memo_cache_sentinel")?(p="x1escl5o xixxii4 xtzzx4i xr6a42u x11uqc5h",b[9]=p):p=b[9];b[10]!==r?(t=i.jsx(c("PolarisSponsoredPersistentCTAThumbnail.react"),{thumbnailImageSrc:r}),b[10]=r,b[11]=t):t=b[11];b[12]!==e||b[13]!==g||b[14]!==m||b[15]!==t||b[16]!==a||b[17]!==f?(r=i.jsx(c("PolarisPostFooterCTA.react"),{ctaAdditionalAnimation:e,ctaDominantColor:g,disableAnimation:!0,externalURL:m,forceBottomBorder:!1,icon:t,isActive:!0,isForAd:!0,isForPersistentCta:!0,onClick:a,showChevron:!0,showRoundedBorder:!0,text:f}),b[12]=e,b[13]=g,b[14]=m,b[15]=t,b[16]=a,b[17]=f,b[18]=r):r=b[18];b[19]!==n||b[20]!==d||b[21]!==r?(e=i.jsx(c("PolarisClickEventLoggerProvider.react"),{children:i.jsx(c("PolarisTrackingNodeProvider.react"),{trackingNode:86,children:i.jsx("div",{className:p,ref:n,style:d,children:r})})}),b[19]=n,b[20]=d,b[21]=r,b[22]=e):e=b[22];b[23]!==o||b[24]!==s||b[25]!==e?(g=i.jsx(c("PolarisTrackingCodeProvider.react"),{isSponsored:!0,m_pk:o,trackingToken:s,children:e}),b[23]=o,b[24]=s,b[25]=e,b[26]=g):g=b[26];return g}function a(a){var b,e=k(11),f=a.entryPoint,g=a.mpk,h=c("getPolarisPostIdFromNativeId")(g);e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(a){return a},e[0]=g):g=e[0];g=d("polarisAdsSelectors.react").useFeedAdInfo(h,g);var j;e[1]===Symbol["for"]("react.memo_cache_sentinel")?(j=function(a){return a},e[1]=j):j=e[1];j=d("polarisAdsSelectors.react").useStoryAdInfo(h,j);j=f!==null&&f==="story"?j:g;g=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostById(a,h)});var l=g.isSidecar,n=g.src,o=g.thumbnailSrc;l=l===!0?(l=d("PolarisPostUtils").getCurrentSidecarItemFromPost(g,0))==null?void 0:l.id:g.id;o=(o=o)!=null?o:n;if(l==null||o==null)return null;n=j==null?void 0:(n=j.ctaItems)==null?void 0:(n=n.get(l))==null?void 0:n.ctaLinkUrl;b=j==null?void 0:(b=j.ctaItems)==null?void 0:(b=b.get(l))==null?void 0:b.ctaLinkText;j=j==null?void 0:(j=j.ctaItems)==null?void 0:(j=j.get(l))==null?void 0:j.ctaDominantColor;if(n==null||b==null)return null;var p;e[2]!==a||e[3]!==b||e[4]!==j||e[5]!==f||e[6]!==n||e[7]!==l||e[8]!==g||e[9]!==o?(p=i.jsx(c("PolarisErrorBoundary.react"),{children:i.jsx(m,babelHelpers["extends"]({},a,{ctaLinkText:b,domColor:j,entryPoint:f,externalURL:n,mediaId:l,post:g,thumbnailImageSrc:o}))}),e[2]=a,e[3]=b,e[4]=j,e[5]=f,e[6]=n,e[7]=l,e[8]=g,e[9]=o,e[10]=p):p=e[10];return p}g["default"]=a}),98);
__d("usePolarisCommentsSortOrder",["PolarisSortCommentsUtil","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useState;function a(){return i(d("PolarisSortCommentsUtil").CommentsOptionValues.TOP)}g["default"]=a}),98);
__d("useThrottled",["cr:6101"],(function(a,b,c,d,e,f,g){"use strict";f.exports=b("cr:6101")}),34);
__d("useThrottledComet",["CometThrottle","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useLayoutEffect,k=b.useRef;function a(a,b){b===void 0&&(b=100);var d=k(a);j(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},b)});i(function(){return function(){e.cancel()}},[]);return e}g["default"]=a}),98);
__d("useThrottledImpl",["cr:1708227"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1708227")}),98);