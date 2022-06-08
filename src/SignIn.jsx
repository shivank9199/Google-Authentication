import React from "react";
import { firebase } from "./Firebase/firebase";

const SignIn = () => {

    const SignInWithFirebase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().SignInWithPopup(google_provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <button onClick={SignInWithFirebase}>Sign In with Google</button>
    )
}

export default SignIn