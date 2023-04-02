// dohvaćanje podataka o korisniku
function fetchUserData(url, userName, setUserData, setError) {
    return fetch(url + userName)
    .then(response => response.json())
    .then(data => setUserData(data))
    .catch(error => setError(error.toString()));

}

// dohvaćanje podataka o repozitorijima korisnika
function fetchReposData(url, userName, setReposData, setError) { 
    return fetch(url + userName + "/repos")
    .then(response => response.json())
    .then(data => setReposData(data))
    .catch(error => setError(error.toString()));

}


export {fetchUserData, fetchReposData}; 