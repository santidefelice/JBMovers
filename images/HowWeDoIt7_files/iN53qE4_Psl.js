;/*FB_PKG_DELIM*/

__d("MAWThreadId",["LSMessagingThreadTypeUtil","ReQL","asyncToGeneratorRuntime","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a){c("recoverableViolation")("Checking if a threadKey is a secure thread key in Occamadillo. We should be\n      checking the thread's thread type instead","messenger_web_product");return!1}function h(a,b){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){a=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.threads).getKeyRange(b)));if(a==null)return;return a.threadType});return i.apply(this,arguments)}function e(a,b){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){a=(yield h(a,b));return a==null?!1:d("LSMessagingThreadTypeUtil").isArmadilloSecure(a)});return j.apply(this,arguments)}function f(a,b){return d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.threads).getKeyRange(b))}g.isThreadId=a;g.isSecureThreadId=e;g.getThreadFromJid=f}),98);
__d("PolarisSettingsCommentsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisSettingsCommentsRoot.react").__setRef("PolarisSettingsCommentsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisSettingsSharingRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisSettingsSharingRoot.react").__setRef("PolarisSettingsSharingRoot.entrypoint")};g["default"]=a}),98);