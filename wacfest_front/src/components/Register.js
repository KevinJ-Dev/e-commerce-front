import React, {useState} from "react";
import '../stylesheets/log.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email invalide");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Uniquement des lettres, la longueur doit être au mieux de 8 caractères minimum et de 22 caractères maximum"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return(
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group">
                                <label>Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="NameInput"
                                    name="NameInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Toto"
                                />
                            </div>

                            <div className="form-group">
                                <label>Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FirstNameInput"
                                    name="FirstNameInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Tata"
                                />
                            </div>

                            <div className="form-group">
                                <label>Adresse e-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Toto@gmail.com"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Mot de passe"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <small id="passworderror" className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}