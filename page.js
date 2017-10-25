document.addEventListener('DOMContentLoaded', function () {
    const spanRequestedUrl = document.getElementById('requested-url');
    const spanResponseUrl = document.getElementById('response-url');

    const requestUrl = '/manifest.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl, true);
    xhr.onloadend = function () {
        spanRequestedUrl.textContent = requestUrl;
        spanResponseUrl.textContent = xhr.responseURL;
    };
    xhr.send();
});
