// import type { UserActions } from "@/store";
import { useUserStore } from '../../../stores'

function useLogout() {
    const { setUser, setAuthenticated } = useUserStore(
        (state) => state
    )
    const clearDataUser = () => {
        setAuthenticated(false)
        setUser([])
    }
    const logout = async () => {
        try {
            clearDataUser()
            // location.reload();
        } catch (error) {
            console.log(error)
        }
        // return data;
    }
    return {
        logout,
    }
}

export default useLogout