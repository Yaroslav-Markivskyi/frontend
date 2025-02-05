function sendHttpRequest(method, url, data) {
    const token = sessionStorage.getItem("access_token");
    const headers = {};
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return fetch(url, {
        method: method,
        body: data,
        headers: headers
    })
    .then(response => {
        const isResponseEmpty = !response.headers.get('Content-Type');
        if (isResponseEmpty) {
            return null;
        }
        if (response.status === 401) {
            console.log('Token expired, refreshing...');
            return refreshToken().then(() => {
                return sendHttpRequest(method, url, data);
            });
        }
        console.log(response.status)
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData["detail"]);
                throw new Error(errData["detail"]);
            });
        }
    })
    .catch(error => {
        throw new Error(error.message);
      });
}