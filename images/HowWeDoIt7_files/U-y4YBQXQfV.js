;/*FB_PKG_DELIM*/

__d("IGDSChevronRightPanoFilledIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("polyline",{fill:"none",points:"8.351 3.354 17 12 8.351 20.646",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("PolarisStoriesV3DeleteMediaContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={deleteMedia:c("emptyFunction"),isDeleted:c("emptyFunction").thatReturns(!1)};e=a.createContext(b);g["default"]=e}),98);
__d("PolarisStoriesV3LoggingUtils",[],(function(a,b,c,d,e,f){"use strict";function g(a){return parseFloat(a.toFixed(2))}function a(a){return g(a/1e3)}f.roundFloat=g;f.msToS=a}),66);
__d("PolarisStoriesV3LoggingSession",["PolarisStoriesV3LoggingUtils","PolarisStoriesV3MediaType"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){function a(){this.$1=null,this.$2=null,this.$3=0}var b=a.prototype;b.play=function(){this.$1==null&&(this.$1=Date.now());var a=this.$2;a!=null&&(this.$3+=Date.now()-a,this.$2=null)};b.pause=function(){this.$2==null&&(this.$2=Date.now())};b.getPauseDuration=function(){var a=this.$2;return a!=null?this.$3+Date.now()-a:this.$3};b.getTimeElapsed=function(){var a=this.$1,b=this.getPauseDuration();a=a!=null?Date.now()-a:0;return a-b};return a}();a=function(){function a(){this.$1=null,this.$2=null,this.$3=0,this.$4=0,this.$5=0,this.$6=new h(),this.$7=new h()}var b=a.prototype;b.startReel=function(a){if(this.$1===a)return;this.$1=a;this.$2=null;this.$5++;this.$6=new h();this.$6.play()};b.startMedia=function(a,b){if(this.$2===a)return;this.$2=a;switch(b){case c("PolarisStoriesV3MediaType").Image:this.$3++;break;case c("PolarisStoriesV3MediaType").Video:this.$4++;break}this.$7=new h();this.$7.play()};b.pause=function(){this.$6.pause(),this.$7.pause()};b.play=function(){this.$6.play(),this.$7.play()};b.getPhotosConsumed=function(){return this.$3};b.getVideosConsumed=function(){return this.$4};b.getViewerSessionMediaConsumed=function(){return this.$3+this.$4};b.getViewerSessionReelsConsumed=function(){return this.$5};b.getReelPauseDuration=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getPauseDuration())};b.getReelTimeElapsed=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getTimeElapsed())};b.getMediaPauseDuration=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getPauseDuration())};b.getMediaTimeElapsed=function(){return d("PolarisStoriesV3LoggingUtils").msToS(this.$6.getTimeElapsed())};b.getMediaTimeRemaining=function(a){return Math.max(0,d("PolarisStoriesV3LoggingUtils").roundFloat(a-this.getMediaTimeElapsed()))};return a}();g["default"]=a}),98);
__d("PolarisStoriesV3NavigationContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({hasNext:!1,hasNextReel:!1,hasPrev:!1,hasPrevReel:!1,isNavigating:c("emptyFunction").thatReturnsFalse,next:c("emptyFunction"),nextReel:c("emptyFunction"),prev:c("emptyFunction"),prevReel:c("emptyFunction")});g["default"]=b}),98);
__d("PolarisStoriesV3PauseReason",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["None","Hidden","KeyCommand","LongPress","MediaOverlayCTA","PauseButton","Press","Reply","Sticker"]);c=a;f["default"]=c}),66);
__d("PolarisStoriesV3PlayerControllerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("PolarisStoriesV3PlayingState",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["NotStarted","Playing","Stalling","Paused","Ended"]);c=a;f["default"]=c}),66);
__d("PolarisStoriesV3TranslationDialogRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8206603952689674"}),null);
__d("PolarisStoriesV3ViewerLoggingContext",["PolarisStoriesV3ContainerModule","PolarisStoriesV3LoggingSession","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({getAction:c("emptyFunction").thatReturns("unknown"),getTrayPosition:c("emptyFunction").thatReturns(-1),hasLoggedReelPlaybackEntry:c("emptyFunction").thatReturnsFalse,initialNewReelCount:-1,initialViewedReelCount:-1,loggingSession:new(c("PolarisStoriesV3LoggingSession"))(),module:c("PolarisStoriesV3ContainerModule").Unknown,previewImpressions:new Set(),reelType:"",setAction:c("emptyFunction"),setLoggedReelPlaybackEntry:c("emptyFunction"),traySessionId:"",viewerSessionId:""});g["default"]=b}),98);
__d("last",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=null;if(Array.isArray(a)||typeof a==="string")a.length&&(b={value:a[a.length-1]});else for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b=b||{};b.value=e}return b?b.value:null}f["default"]=a}),66);
__d("useEffectOnce",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a){return i(a,[])}g["default"]=a}),98);
__d("usePolarisDashInfo_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisDashInfo_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_dash_eligible",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number_of_qualities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_dash_manifest",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisDashInfo",["CometRelay","react","usePolarisDashInfo_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;c=i||d("react");c.useMemo;var j=c.unstable_useMemoCache;function a(a){var c=j(4);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisDashInfo_media.graphql"),a);var e=a.is_dash_eligible===1,f;c[0]!==e||c[1]!==a.number_of_qualities||c[2]!==a.video_dash_manifest?(f={isDashEligible:e,numberOfQualities:a.number_of_qualities,videoDashManifest:a.video_dash_manifest},c[0]=e,c[1]=a.number_of_qualities,c[2]=a.video_dash_manifest,c[3]=f):f=c[3];e=f;return e}g["default"]=a}),98);
__d("usePolarisStoriesV3DeleteMediaContext",["PolarisStoriesV3DeleteMediaContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("PolarisStoriesV3DeleteMediaContext"))}g["default"]=a}),98);
__d("usePolarisStoriesV3MediaType_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3MediaType_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisStoriesV3MediaType",["CometRelay","FBLogger","PolarisStoriesV3MediaType","react","usePolarisStoriesV3MediaType_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).unstable_useMemoCache;function a(a){var e=j(2);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisStoriesV3MediaType_media.graphql"),a);var f;e[0]!==a.media_type?(f=c("PolarisStoriesV3MediaType").cast(a.media_type),e[0]=a.media_type,e[1]=f):f=e[1];a=f;if(a==null)throw c("FBLogger")("ig_web").mustfixThrow("Unsupported story media_type");return a}g["default"]=a}),98);
__d("usePolarisStoriesV3NavigationContext",["PolarisStoriesV3NavigationContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("PolarisStoriesV3NavigationContext"))}g["default"]=a}),98);
__d("usePolarisStoriesV3PlayerController",["FBLogger","PolarisStoriesV3PlayerControllerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){var a=i(c("PolarisStoriesV3PlayerControllerContext"));if(a==null)throw c("FBLogger")("ig_web").mustfixThrow("PolarisStoriesV3PlayerControllerContext is empty");return a}g["default"]=a}),98);
__d("usePolarisStoriesV3PausePlayer",["PolarisStoriesV3PlayingState","react","usePolarisStoriesV3PlayerController"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;function a(a){var b=j(4),d=c("usePolarisStoriesV3PlayerController")(),e,f;b[0]!==d||b[1]!==a?(e=function(){var b=d.getPlayingState();if(b===c("PolarisStoriesV3PlayingState").Playing){d.pause(a);return function(){d.play()}}},f=[d,a],b[0]=d,b[1]=a,b[2]=e,b[3]=f):(e=b[2],f=b[3]);i(e,f)}g["default"]=a}),98);
__d("usePolarisStoriesV3ViewerLoggingContext",["PolarisStoriesV3ViewerLoggingContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("PolarisStoriesV3ViewerLoggingContext"))}g["default"]=a}),98);
__d("usePolarisStoriesV3ViewingOwnStory_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3ViewingOwnStory_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisStoriesV3ViewingOwnStory_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisStoriesV3ViewingOwnStory_viewer",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],storageKey:null}],type:"XDTViewer",abstractKey:null};e.exports=a}),null);
__d("usePolarisStoriesV3ViewingOwnStory",["CometRelay","usePolarisStoriesV3ViewingOwnStory_user.graphql","usePolarisStoriesV3ViewingOwnStory_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,c){a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisStoriesV3ViewingOwnStory_user.graphql"),a);c=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisStoriesV3ViewingOwnStory_viewer.graphql"),c);return a.pk===((a=c.user)==null?void 0:a.pk)}g["default"]=a}),98);
__d("useSetAttributeRef",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.unstable_useMemoCache;function a(a,b){var c=i(3),d;c[0]!==a||c[1]!==b?(d=function(c){c!=null&&c.setAttribute(a,b)},c[0]=a,c[1]=b,c[2]=d):d=c[2];return d}g["default"]=a}),98);