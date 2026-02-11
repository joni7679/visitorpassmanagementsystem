import { useContext } from "react";
import { AuthConext } from "../context/AuthContext";
import { useEffect } from "react";

function useAuthhook() {
    const { user, userProfile } = useContext(AuthConext);
    useEffect(() => {
        if (!user) {
            userProfile()
        }
    }, [user])
    return {
        user,
        userProfile
    }
}
export default useAuthhook