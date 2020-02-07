const fetch = require('node-fetch')

class Request {
    constructor(url, data, method, body, mode, cache, credentials, headers, contentType, redirect, referrerPolicy, params, query, variable) {
        this.url = url;
        this.data = data;
        this.body = body;
        this.method = method;
        this.mode = mode;
        this.cache = cache;
        this.credentials = credentials;
        this.headers = headers;
        this.contentType = contentType;
        this.redirect = redirect;
        this.referrerPolicy = referrerPolicy;
        this.get = async function(url = this.url) {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
            });
            return await response.json();
        }
        this.post = async function(url = this.url, data = this.data) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return await response.json();
        }

        this.put = async function(url = this.url, data = this.data) {
            const response = await fetch(url, {
                method: 'PUT',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return await response.json();
        }

        this.delete = async function(url = this.url, data = this.data) {
            const response = await fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return await response.json();
        }

        this.getData = async function(url = this.url, data = this.data){
            const response = await fetch(url, {
                method: 'get',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
            });
            console.log(response)
        }
    }
}

module.exports = new Request();