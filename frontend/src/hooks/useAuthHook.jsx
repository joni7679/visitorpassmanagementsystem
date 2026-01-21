import { useContext, useEffect } from "react"
import { AuthConext } from "../context/AuthContext";

function useAuthhook() {
    const { authLoader, user } = useContext(AuthConext)


}
export default useAuthhook