import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);



const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName < 2){
            alert("First name must be at least 2 characters long");
            return;
        }
        if (lastName < 2){
            alert("Last name must be at least 2 characters long");
            return;
        }
        if (email < 5){
            alert("Email must be at least 5 characters long");
            return;
        }
        if (password < 8){
            alert("Password must be at least 8 characters long");
            return;
        }
        if (password!== confirmPassword) {
            alert("Passwords do not match");
        } else {
            props.createUser({
                firstName,
                lastName,
                email,
                password,
            });
            setHasBeenSubmitted(true);
        }
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>


                {hasBeenSubmitted ? (
                    <h3>Thank you for submitting the form!</h3>
                ) : (
                    <h3>Welcome, please submit the form.</h3>
                )}
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="text"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div className="realTime">
                <h2>Real time Data:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Address: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;
