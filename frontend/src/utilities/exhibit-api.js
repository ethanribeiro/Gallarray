
const BASE_URL = process.env.REACT_APP_BASE_URL

console.log(BASE_URL)

export async function index(){
    const res = await fetch(BASE_URL, {
        method: "GET"
    });

    console.log(res);

    if(res.ok){
        return res.json();
    } else {
        return new Error("Invalid Request");
    }
}

export async function create(data) {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    const res = await fetch(BASE_URL, config);

    if(res.ok){
        return res.json();
    } else {
        return new Error("Invalid Request");
    }
}

export async function detail(id) {
    const URL = `${BASE_URL}/${id}`
    const config = {
        method: "GET"
    };
    const res = await fetch(URL, config);

    if(res.ok){
        return res.json();
    } else {
        return new Error("Invalid Request");
    }
}

export async function destroy(id){
    const URL = `${BASE_URL}/${id}`
    const config = {
        method: "DELETE",
    };
    const res = await fetch(URL, config);

    if(res.ok){
        return res.json();
    } else {
        return new Error("Invalid Request");
    }
}

export async function update(id, data) {
    const URL = `${BASE_URL}/${id}`;
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(URL, config);

    if(res.ok){
        return res.json();
    } else {
        return new Error("Invalid Request");
    }
}