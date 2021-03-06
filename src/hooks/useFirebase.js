import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const googleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                return;
            }
        });
    }, [auth])
    return {
        googleSignIn,
        user,
        googleSignOut,
        error,
        setError
    }
}
export default useFirebase;




