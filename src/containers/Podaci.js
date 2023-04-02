import {useState} from "react";
import Prikaz from "../components/Prikaz";
import Obrazac from "../components/Obrazac";
import {fetchUserData, fetchReposData} from "../services/fetchData";


function Podaci() {

    // stanje
    const [user, setUser] = useState(null); // podaci o korisniku {}
    const [repos, setRepos] = useState([]); // [{}, {}, ...]
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState(null);
   

    // event handlers
    // dohvaćanje podataka - onClick
    const sendRequest = () => {
        // validacija
        if (userName) { // dohvaćanje podataka samo ako je nešto upisano u polje
            // dohvaćanje podataka o korisniku
            fetchUserData("https://api.github.com/users/", userName, setUser, setError);
            //console.log("fetchUserData");
           
            // dohvaćanje podataka o repozitorijima korisnika
            fetchReposData("https://api.github.com/users/", userName, setRepos, setError);
            //console.log("fetchReposData");
        } else {
            alert("Upišite ime GitHub korisnika.");
            // setUser(null);
            // setRepos([]);
        }
    }
    

    // unos imena korisnika u polje - onChange
    const handleUserName = (event) => {
        const value = event.target.value;
        setUserName(value.trim()); // u stanje se sprema vrijednost bez suvišnih razmaka
    }

    // brisanje podataka - onClick
    const deleteData = () => {
        setUser(null);
        setRepos([]);
        setUserName(null);
    }
 

    // uvjetno iscrtavanje
    return (
        <div>
            {!user && !(repos.length > 0) ? <Obrazac onUserNameChange={handleUserName} onRequest={sendRequest} /> : error ? <div>{error.toString()}</div> : user && repos.length > 0 ? <Prikaz user={user} repos={repos} onDataDelete={deleteData} /> : <div><Obrazac onUserNameChange={handleUserName} onRequest={sendRequest} /><span style={{color: "red"}}>Nema podataka o korisniku.</span></div>}
        </div>
    );
}

export default Podaci;