const host = 'https://youngship.backendless.app';

async function request(method,url, data) {
    const options = {
        method,
        headers: {},
    };
    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null){
        options.headers['objectId'] = userData.objectId;
        options.headers['user-token'] = userData['user-token'];
        console.log('YES headers in api');
    }
    try {
        const res = await fetch(host+url, options);
    
        if (res.ok == false) {
            const error = await res.json();
            throw Error(error.message);
        }
        if(res.status == 204){
            return res;
        }else{
            return res.json();
        }
        
    } catch (err) {
        alert(err.message)
        throw err;
    }
}

export async function get(url){
    return request('get', url)
}

export async function post(url,data){
    return request('post',url,data);
}
export function put(url,data){
    return request('put', url, data)
}
export function del(url){
    return request('delete', url)
}