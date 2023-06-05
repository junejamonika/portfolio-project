export async function authGateway(METHOD, URL, BODY, formData = false) {
    const TOKEN = localStorage.getItem("sm-magic")
    const OPTIONS = {
        method: METHOD,
        headers: {
            ...(!formData) && { 'Content-Type': 'application/json' },
            'x-access-token': TOKEN,
        },
        body: BODY == "" ? null : BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                // error handling
            }
            return response;
        });
}

export async function guestGateway(METHOD, URL, BODY = "") {
    const OPTIONS = {
        method: METHOD,
        headers: {
            'Content-Type': 'application/json',
        },
        body: BODY == "" ? null : BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        return text && JSON.parse(text);
    });
}
