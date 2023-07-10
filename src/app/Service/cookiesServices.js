
// Source: https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export function GetCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    if (cookie[name.toUpperCase()]) {
        return cookie[name.toUpperCase()] ?
            JSON.parse(cookie[name.toUpperCase()]) :
            null;
    } else return
}

/**
 * Set / Update Cookie by name
 * @param cookieName 
 * @param body 
 */
export function SetCookie(name, body) {
    document.cookie = `${name.toUpperCase()}=${JSON.stringify(body)};SameSite=Strict;`
}

/**
 * Remove cookie by name
 * @param cookieName 
 */
export function RemoveCookie(name) {
    if (GetCookie(name)) {
        document.cookie = name.toUpperCase() + '=;Max-Age=-99999999;'
    }
}