import axios from "axios";
import { useProductStore, useUserStore } from "../../../stores";

function useGetProduct() {
  const { setProducts } = useProductStore((state) => state);
  const { User } = useUserStore((state) => state);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('/products', {
        headers: {
          'Authorization': User.tokenSession,
        }
      })
      if (data?.length > 0) {
        setProducts(data)
        return { ok: true }
      }
      if (data?.error) return { ok: false, message: data.error }
      return { ok: false }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getAllProducts,
  }
}

export default useGetProduct;