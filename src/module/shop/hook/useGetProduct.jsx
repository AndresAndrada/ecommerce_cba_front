import axios from "axios";
import { useProductStore } from "../../../stores";

function useGetProduct() {
  const { setProducts } = useProductStore((state) => state);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('/products', {
        headers: {
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MDI4OGU4Mi02YTI4LTRhZTYtYjAwZS1mNjFlOGM4YzE5YjQiLCJpYXQiOjE3MjcyMjc4ODUsImV4cCI6MTcyNzIzNTA4NX0.KJ3pxIZG12qnXEgsw5NZ5lOdGtAGc46qVIIIYzYvrLs',
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

export default useGetProduct