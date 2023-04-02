import React from "react";
import pt from "prop-types";

class Obrazac extends React.Component {
    render() {
        // dekonstrukcija
        const {onUserNameChange, onRequest} = this.props;

        return (
            <form>
                <label htmlFor="polje">GitHub username:</label><br />
                <input type="text" id="polje" placeholder="e. g. facebook" onChange={onUserNameChange}/><br />
                <button type="button" onClick={onRequest}>GO!</button>
            </form>
        );
    }
}

Obrazac.propTypes = {
    onUserNameChange: pt.func,
    onRequest: pt.func
};

export default Obrazac;