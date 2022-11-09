const baseUrl = process.env.REACT_APP_API_URL;


const fetchMultipartConToken = (endpoint, data) => {

    const token = localStorage.getItem('token') || '';

    const url = `${baseUrl}/${endpoint}`;
    console.log(url)
    const formData = new FormData();

    for (const name in data) {
        console.log(name, data[name])
        formData.append(name, data[name]);
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'x-token': token
        },
        body: formData
    });
}

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}



export {
    fetchSinToken,
    fetchConToken,
    fetchMultipartConToken
}