import React, { useCallback } from "react";
import SignUpForm from "../components/SignUpForm";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


function SignUp({setErrors, setLoggedIn, setUserInformation}) {

    const signUpUser = useCallback((e) => {
        e.preventDefault();
        
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const displayName = e.currentTarget.displayName.value;
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
            const user = userCredential.user;

            setLoggedIn(true);
            setUserInformation({
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
                accessToken: user.accessToken,
            });
            setErrors();

            updateProfile(auth.currentUser, {
                displayName,
            })
                .then(() => {
                    return true;
                })
                .catch((error) => {
                    return setErrors(error.errorMessage);
                });
            })
    
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn({ error, errorCode, errorMessage });
            setErrors(errorMessage);
        });
    }, [setErrors, setLoggedIn, setUserInformation]
    );

    return (
        <div className="PageWrapper" >
            <h1>Create User</h1>
            <SignUpForm signUpUser={ signUpUser }/>
        </div>
    );
}

export default SignUp;