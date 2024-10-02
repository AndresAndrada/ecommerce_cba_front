import axios from "axios";
import { useUserStore } from "../../../stores";

function useCreateProduct() {
    const { setUser, setAuthenticated } = useUserStore((state) => state);

    const createProduct = async ({ email, password }) => {
        try {
            //   const { data } = await axios.post('/user/login', { email, password })
            //   console.log(data, 'DATAAAAAAAAAAAA');
            //   if (data?.objectId !== undefined) {
            //     setAuthenticated(true)
            //     setUser({
            //       objectId: data.objectId,
            //       ...data,
            //     })
            //     return { ok: true }
            //   }
            //   if (data?.error) {
            //     return { ok: false, message: data.error }
            //   }
            //   return { ok: false }
        } catch (error) {
            console.log(error)
        }
    }
    return {
        createProduct,
    }
}

export default useCreateProduct