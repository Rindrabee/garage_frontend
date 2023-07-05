const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
};

const tokenIsExpired = token => {
    if (!token) {
        return true;
    }
    
    const parsedJwt = parseJwt(token);
    let expirationTimestamp = parsedJwt['exp'] * 1000;
    
    let tokenDate = new Date(expirationTimestamp);
    let currentDate = new Date();

    console.log('tokenDate', tokenDate);
    console.log('currentDate', currentDate);
    
    return tokenDate < currentDate;
};

export { tokenIsExpired };