const ajaxService = (term) =>{
    const url = "https://api.postit.lt/?term=";
    const key = "4U5x4QVHMIonl8TCYKcx";

    return fetch(`${url}${term}&key=${key}`)
        .then(response => response.json())
}

export default ajaxService