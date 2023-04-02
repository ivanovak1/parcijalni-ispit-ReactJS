import React from "react";
import pt from "prop-types";

class Prikaz extends React.Component {
    render() {
        // dekonstrukcija
        const {user: {avatar_url, name, location, bio}, repos, onDataDelete} = this.props;

        return (
            <div>
                <img src={avatar_url} alt="avatar" width="120px" height="120px" />
                <h1>{name}</h1>
                <p><strong>BIO:</strong> {bio ? bio : "nema podataka"}</p>
                <p><strong>LOCATION:</strong> {location ? location : "nema podataka"}</p>
                <p><strong>REPOSITORIES:</strong> </p>
                <ul>
                {repos.map((repo) => {
                    return (
                        <li key={repo.id}>{repo.name}</li>
                    );
                })}
                </ul>
                <button type="button" onClick={onDataDelete}>Reset</button>
            </div>
        );
    }
}

Prikaz.propTypes = {
    user: pt.object,
    repos: pt.array,
    onDataDelete: pt.func
};

export default Prikaz;