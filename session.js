window.addEventListener('load', function () {
    chrome.storage.sync.get(['active'], function(result) {
        if (!(typeof result.active === 'undefined')) {
            if (result.active == true) {
                const sessionIDcookieVal = getCookie('MoodleSession');
                if(sessionIDcookieVal != ''){
                    setCookie('MoodleSession', sessionIDcookieVal, 'Mon, 18 Jan 2038 20:14:07 GMT');
                }
            } else {
                console.log("Extension not active");
            }
        }
    });
});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    let expires = "expires="+exdays;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}