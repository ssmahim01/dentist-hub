import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        loading,
        registerUser,
        loginWithEmailPass,
        updateUserInfo,
        resetPassword,
        logOutUser
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;