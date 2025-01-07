import axios from "axios";
import { useUserStore } from "../../../stores";

function useLogIn() {
  const { setUser, setAuthenticated } = useUserStore((state) => state);

  const logIn = async ({ email, password }) => {
    try {
      const { data } = await axios.post('/users/login', { email, password })
      console.log(data, 'DATAAAAAAAAAAAA');
      if (data?.objectId !== undefined) {
        setAuthenticated(true)
        setUser({
          objectId: data.objectId,
          ...data,
        })
        return { ok: true }
      }
      if (data?.error) {
        return { ok: false, message: data.error }
      }
      return { ok: false }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    logIn,
  }
}

export default useLogIn