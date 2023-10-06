import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
}
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UpdateProfile = (name,photo) => {
        if (auth.currentUser) {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
              })
        }
    }

    // Login 
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //LogOut

    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // onAuthState

    useEffect(() => {
        const unsubscride = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsubscride();
    },[])

    const authInfo = {
        createUser,
        UpdateProfile,
        Login,
        user,
        loading,
        LogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;