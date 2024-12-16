;/*FB_PKG_DELIM*/

__d("PolarisProfileAvatarPlaceholder.react",["IGDSGlimmer.react","polarisAvatarConstants","react","usePolarisIsSmallScreen"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={avatarGlimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",outline:"xanerw1",width:"xh8yej3",$$css:!0}};function a(){var a=i(6),b=c("usePolarisIsSmallScreen")();b=b?d("polarisAvatarConstants").PROFILE_AVATAR_SIZE_SMALL:d("polarisAvatarConstants").PROFILE_AVATAR_SIZE_LARGE;var e=b+"px";b=b+"px";var f;a[0]!==e||a[1]!==b?(f={height:e,width:b},a[0]=e,a[1]=b,a[2]=f):f=a[2];a[3]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.avatarGlimmer}),a[3]=e):e=a[3];a[4]!==f?(b=j.jsx("div",{style:f,children:e}),a[4]=f,a[5]=b):b=a[5];return b}g["default"]=a}),98);
__d("PolarisProfileBiographyPlaceholder.react",["IGDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={badgeGlimmer:{borderTopStartRadius:"xdxvlk3",borderTopEndRadius:"x1fglp",borderBottomEndRadius:"x1rp6h8o",borderBottomStartRadius:"xg6i1s1",height:"xd7y6wv",width:"xefyazp",$$css:!0},bioGlimmer:{height:"xmix8c7",width:"x1tucx9d",$$css:!0},usernameGlimmer:{height:"xmix8c7",width:"x1hetxy2",$$css:!0}};function a(){var a=i(4),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.usernameGlimmer}),a[0]=b):b=a[0];var d;a[1]===Symbol["for"]("react.memo_cache_sentinel")?(d="x6s0dn4 x78zum5 x16wdlz0",a[1]=d):d=a[1];a[2]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("div",{className:d,children:j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.badgeGlimmer})}),a[2]=d):d=a[2];a[3]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsxs("div",{children:[b,d,j.jsx("div",{children:j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.bioGlimmer})})]}),a[3]=b):b=a[3];return b}g["default"]=a}),98);
__d("PolarisProfileHeaderInsights_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisProfileHeaderInsights_user",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileHeaderInsights_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisProfileHeaderInsights_viewer",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"user.pk"},{alias:null,args:null,kind:"ScalarField",name:"can_see_organic_insights",storageKey:null}],storageKey:null}],type:"XDTViewer",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileHeaderLayout.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(30),c=a.avatar,d=a.bio,e=a.chainingUsers,f=a.highlights,g=a.insights,h=a.statistics;a=a.usernameWithActionButtons;var k;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(k="xrvj5dj xpagfr2 xl463y0 x3mjgb7 xdj266r xh8yej3",b[0]=k):k=b[0];var l;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(l="x6s0dn4 x78zum5 xcrlgei xghq6j0 x1cq0mwf x1agbcgv xl56j7k xqmgo2j x16zxmhm",b[1]=l):l=b[1];b[2]!==c?(l=j.jsx("section",{className:l,children:c}),b[2]=c,b[3]=l):l=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(c="x1xdureb x1agbcgv x1wo17tc xieb3on x6ikm8r x10wlt62 xlrpkbc",b[4]=c):c=b[4];b[5]!==a?(c=j.jsx("section",{className:c,children:a}),b[5]=a,b[6]=c):c=b[6];b[7]===Symbol["for"]("react.memo_cache_sentinel")?(a="xc3tme8 x1uhmqq1 x1xdureb x18z9r2k x13vxnyz",b[7]=a):a=b[7];b[8]!==h?(a=j.jsx("section",{className:a,children:h}),b[8]=h,b[9]=a):a=b[9];b[10]===Symbol["for"]("react.memo_cache_sentinel")?(h="xc3tme8 x1uhmqq1 x1xdureb xo55r9g x1vnunu7 x14tfgiu xlrpkbc xpoid6y x16zxmhm x6ikm8r x10wlt62",b[10]=h):h=b[10];b[11]!==d?(h=j.jsx("section",{className:h,children:d}),b[11]=d,b[12]=h):h=b[12];b[13]===Symbol["for"]("react.memo_cache_sentinel")?(d="xc3tme8 x1xdureb x9q08ia x1rlzn12 xlrpkbc",b[13]=d):d=b[13];b[14]!==g?(d=j.jsx("section",{className:d,children:g}),b[14]=g,b[15]=d):d=b[15];b[16]===Symbol["for"]("react.memo_cache_sentinel")?(g="xc3tme8 xcrlgei x12meozh x1682tcd",b[16]=g):g=b[16];b[17]!==f?(g=j.jsx("section",{className:g,children:f}),b[17]=f,b[18]=g):g=b[18];b[19]===Symbol["for"]("react.memo_cache_sentinel")?(f="xc3tme8 xcrlgei x151v706 x1tmp44o xrqqywu x7y0ge5",b[19]=f):f=b[19];b[20]!==e?(f=j.jsx("section",{className:f,children:e}),b[20]=e,b[21]=f):f=b[21];b[22]!==l||b[23]!==c||b[24]!==a||b[25]!==h||b[26]!==d||b[27]!==g||b[28]!==f?(e=j.jsxs("header",{className:k,"data-testid":void 0,children:[l,c,a,h,d,g,f]}),b[22]=l,b[23]=c,b[24]=a,b[25]=h,b[26]=d,b[27]=g,b[28]=f,b[29]=e):e=b[29];return e}g["default"]=a}),98);
__d("PolarisProfileHeaderUsernameWithActionButtonsPlaceholder.react",["IGDSBox.react","IGDSGlimmer.react","react","usePolarisIsSmallScreen"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={buttonGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x10w6t97",width:"x1m56yxe",$$css:!0},usernameGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xlrawln",width:"x1tucx9d",$$css:!0}};function a(){var a=i(5),b=c("usePolarisIsSmallScreen")(),d;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx(c("IGDSBox.react"),{height:48,justifyContent:"center",children:j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.usernameGlimmer})}),a[0]=d):d=a[0];var e;a[1]!==b?(e=b&&j.jsxs(c("IGDSBox.react"),{columnGap:2,direction:"row",marginTop:3,children:[j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.buttonGlimmer}),j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.buttonGlimmer})]}),a[1]=b,a[2]=e):e=a[2];a[3]!==e?(b=j.jsxs("div",{children:[d,e]}),a[3]=e,a[4]=b):b=a[4];return b}g["default"]=a}),98);
__d("PolarisProfileHeader_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisProfileHeader_user",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"},{args:null,kind:"FragmentSpread",name:"PolarisProfileAvatar_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfilePageBiography_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfilePageBiographyNext_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfileHeaderInsights_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfileHeaderUsernameWithActionButtons_user"},{args:null,kind:"FragmentSpread",name:"PolarisProfileStatistics_user"},{args:null,kind:"FragmentSpread",name:"usePolarisIsViewingOwnProfile_user"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileHeader_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisProfileHeader_viewer",selections:[{args:null,kind:"FragmentSpread",name:"PolarisProfilePageBiography_viewer"},{args:null,kind:"FragmentSpread",name:"PolarisProfileHeaderInsights_viewer"},{args:null,kind:"FragmentSpread",name:"PolarisProfileStatistics_viewer"},{args:null,kind:"FragmentSpread",name:"usePolarisIsViewingOwnProfile_viewer"}],type:"XDTViewer",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileStatisticsPlaceholder.react",["IGDSGlimmer.react","react","stylex","usePolarisIsSmallScreen"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l={glimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xmix8c7",$$css:!0},glimmerBigSize:{width:"x1tucx9d",$$css:!0},glimmerSmallSize:{width:"x100vrsf",$$css:!0},itemSmall:{display:"x78zum5",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",$$css:!0},root:{columnGap:"xq5c7ks",display:"x78zum5",flexDirection:"x1q0g3np",$$css:!0},rootBigSize:{marginBottom:"xieb3on",$$css:!0},rootSmallSize:{alignItems:"x6s0dn4",borderTopColor:"x5ur3kl",borderTopStyle:"x13fuv20",borderTopWidth:"x178xt8z",height:"xng8ra",justifyContent:"xl56j7k",width:"xh8yej3",$$css:!0}};function a(){var a=j(5),b=c("usePolarisIsSmallScreen")(),d=b?l.rootSmallSize:l.rootBigSize,e;a[0]!==d?(e=(h||(h=c("stylex")))(l.root,d),a[0]=d,a[1]=e):e=a[1];d=Array(3).fill(0).map(function(a,d){return k.jsx("div",{className:(h||(h=c("stylex")))(b&&l.itemSmall),children:k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:[l.glimmer,b?l.glimmerSmallSize:l.glimmerBigSize]})},d)});var f;a[2]!==e||a[3]!==d?(f=k.jsx("div",{className:e,children:d}),a[2]=e,a[3]=d,a[4]=f):f=a[4];return f}g["default"]=a}),98);
__d("usePolarisIsViewingOwnProfile_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisIsViewingOwnProfile_user",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisIsViewingOwnProfile_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisIsViewingOwnProfile_viewer",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"user.pk"}],storageKey:null}],type:"XDTViewer",abstractKey:null};e.exports=a}),null);
__d("usePolarisIsViewingOwnProfile",["CometRelay","usePolarisIsViewingOwnProfile_user.graphql","usePolarisIsViewingOwnProfile_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,c){a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisIsViewingOwnProfile_user.graphql"),a);a=a.pk;c=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisIsViewingOwnProfile_viewer.graphql"),c);c=c.user;return c!=null&&c.pk===a}g["default"]=a}),98);
__d("PolarisProfileHeader.next.react",["CometErrorBoundary.react","CometPlaceholder.react","CometRelay","PolarisConfig","PolarisProfileAvatarPlaceholder.react","PolarisProfileBiographyPlaceholder.react","PolarisProfileHeaderFollowChainingListWrapper.react","PolarisProfileHeaderInsights_user.graphql","PolarisProfileHeaderInsights_viewer.graphql","PolarisProfileHeaderLayout.react","PolarisProfileHeaderUsernameWithActionButtonsPlaceholder.react","PolarisProfileHeader_user.graphql","PolarisProfileHeader_viewer.graphql","PolarisProfileStatisticsPlaceholder.react","PolarisProfileStoryHighlightsTray.react","deferredLoadComponent","emptyFunction","react","requireDeferredForDisplay","usePolarisIsViewingOwnProfile"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m=l||(l=d("react"));e=l;var n=e.useState,o=e.unstable_useMemoCache,p=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfilePageViewInsights.react").__setRef("PolarisProfileHeader.next.react")),q=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileAvatar.next.react").__setRef("PolarisProfileHeader.next.react")),r=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileHeaderUsernameWithActionButtons.react").__setRef("PolarisProfileHeader.next.react")),s=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileStatistics.next.react").__setRef("PolarisProfileHeader.next.react")),t=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfilePageBiography.next.react").__setRef("PolarisProfileHeader.next.react"));function u(a){var e=o(1),f=a.user;a=a.viewer;f=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisProfileHeaderInsights_user.graphql"),f);f=f.pk;a=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisProfileHeaderInsights_viewer.graphql"),a);a=a.user;a=(a==null?void 0:a.can_see_organic_insights)===!0&&(a==null?void 0:a.pk)===f;if(!a||p==null)return null;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=m.jsx(c("CometPlaceholder.react"),{fallback:null,children:m.jsx(p,{})}),e[0]=f):f=e[0];return f}function a(a){var e=o(42),f=a.chainingSuggestions,g=a.creatorMarketplaceProfileBadgeQuery,h=a.highlightsQuery,i=a.mediaIDAttribution,l=a.profileNoteQuery,p=a.selectedTabId,v=a.sessionID,w=a.showHighlightReels,x=a.suggestedUsersQuery,y=a.user,z=a.userID,A=a.username;a=a.viewer;y=d("CometRelay").useFragment(j!==void 0?j:j=b("PolarisProfileHeader_user.graphql"),y);a=d("CometRelay").useFragment(k!==void 0?k:k=b("PolarisProfileHeader_viewer.graphql"),a);var B=n(!1),C=B[0];B=B[1];var D=c("usePolarisIsViewingOwnProfile")(y,a),E;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(E=m.jsx(c("PolarisProfileAvatarPlaceholder.react"),{}),e[0]=E):E=e[0];e[1]!==D||e[2]!==l||e[3]!==y?(E=m.jsx(c("CometPlaceholder.react"),{fallback:E,children:m.jsx(q,{"data-testid":void 0,isOwnProfile:D,noteQuery:l,user:y})}),e[1]=D,e[2]=l,e[3]=y,e[4]=E):E=e[4];e[5]===Symbol["for"]("react.memo_cache_sentinel")?(D=m.jsx(c("PolarisProfileBiographyPlaceholder.react"),{}),e[5]=D):D=e[5];e[6]!==g||e[7]!==v||e[8]!==y||e[9]!==a?(l=m.jsx(c("CometPlaceholder.react"),{fallback:D,children:m.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:m.jsx(t,{creatorMarketplaceProfileBadgeQuery:g,sessionID:v,user:y,viewer:a})})}),e[6]=g,e[7]=v,e[8]=y,e[9]=a,e[10]=l):l=e[10];e[11]!==C||e[12]!==f||e[13]!==x||e[14]!==z||e[15]!==A?(D=C?m.jsx(c("PolarisProfileHeaderFollowChainingListWrapper.react"),{chainingSuggestions:f,suggestedUsersQuery:x,userID:z,username:A}):null,e[11]=C,e[12]=f,e[13]=x,e[14]=z,e[15]=A,e[16]=D):D=e[16];e[17]!==w||e[18]!==y||e[19]!==h?(g=w?m.jsx(c("PolarisProfileStoryHighlightsTray.react"),{highlightsQuery:h,isOwnProfile:d("PolarisConfig").getViewerId()===y.pk,userID:y.pk}):null,e[17]=w,e[18]=y,e[19]=h,e[20]=g):g=e[20];e[21]!==y||e[22]!==a?(v=m.jsx(u,{user:y,viewer:a}),e[21]=y,e[22]=a,e[23]=v):v=e[23];e[24]===Symbol["for"]("react.memo_cache_sentinel")?(f=m.jsx(c("PolarisProfileStatisticsPlaceholder.react"),{}),e[24]=f):f=e[24];e[25]!==p||e[26]!==y||e[27]!==a?(x=m.jsx(c("CometPlaceholder.react"),{fallback:f,children:m.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:m.jsx(s,{selectedTabId:p,user:y,viewer:a})})}),e[25]=p,e[26]=y,e[27]=a,e[28]=x):x=e[28];e[29]===Symbol["for"]("react.memo_cache_sentinel")?(z=m.jsx(c("PolarisProfileHeaderUsernameWithActionButtonsPlaceholder.react"),{}),e[29]=z):z=e[29];e[30]!==C||e[31]!==i||e[32]!==y?(A=m.jsx(c("CometPlaceholder.react"),{fallback:z,children:m.jsx(r,{chainingExpanded:C,mediaIDAttribution:i,setChainingExpanded:B,user:y})}),e[30]=C,e[31]=i,e[32]=y,e[33]=A):A=e[33];e[34]!==E||e[35]!==l||e[36]!==D||e[37]!==g||e[38]!==v||e[39]!==x||e[40]!==A?(w=m.jsx(c("PolarisProfileHeaderLayout.react"),{avatar:E,bio:l,chainingUsers:D,highlights:g,insights:v,statistics:x,usernameWithActionButtons:A}),e[34]=E,e[35]=l,e[36]=D,e[37]=g,e[38]=v,e[39]=x,e[40]=A,e[41]=w):w=e[41];return w}g["default"]=a}),98);
__d("isEmail",[],(function(a,b,c,d,e,f){var g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function a(a){return g.test(a)}f["default"]=a}),66);