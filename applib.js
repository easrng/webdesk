window.webdesk=window.webdesk||{}

window.webdesk.prefrences=function (domain, prefkey, val){
    return new Promise(function (resolve, reject){
        var cbid=_webdesk_prefcallbacks.length;
        window._webdesk_prefcallbacks[cbid]=resolve;
        try {
            if(!val){
                window.top.postMessage({"getpref":domain+":"+prefkey,"callback":cbid};
            } else {
                window.top.postMessage({"setpref":domain+":"+prefkey,"value":val,"callback":cbid};
             }
        } catch(e) {
            reject(e);
        }
    }
}
