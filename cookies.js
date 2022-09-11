const Cookies = require("cookies");

const getCookieByName = name =>{
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if(cookie){
        // country=US
        const cookieValue = cookie.split('=')[1]
        return cookieValue;
    }
}

document.cookie.at
document.cookie.charAt
document.cookie.charCodeAt
document.cookie.codePointAt
document.cookie.concat
document.cookie.endsWith
document.cookie.includes
document.cookie.indexOf
document.cookie.lastIndexOf
document.cookie.length
document.cookie.localeCompare
document.cookie.match
document.cookie.matchAll
document.cookie.normalize
document.cookie.padEnd
document.cookie.padStart
document.cookie.repeat
document.cookie.replace
document.cookie.search
document.cookie.slice // 
document.cookie.split // every cookie separate
document.cookie.startsWith
document.cookie.substring
document.cookie.toLocaleLowerCase
document.cookie.toLocaleUpperCase
document.cookie.toLowerCase
document.cookie.toString
document.cookie.toUpperCase
document.cookie.trim
document.cookie.trimEnd
document.cookie.trimStart
document.cookie.valueOf
