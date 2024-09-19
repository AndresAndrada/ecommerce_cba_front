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
    const userlogout = async () => {
        try {
            clearDataUser()
            // location.reload();
        } catch (error) {
            console.log(error)
        }
        // return data;
    }
    return {
        userlogout,
    }
}

export default useLogout