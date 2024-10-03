import axios from "axios";
import { useTypeStore } from "../../../stores";

function useGetType() {
  const { setType } = useTypeStore();
  const getAllType = async () => {
    try {
      const { data } = await axios.get('/type');
      if (data?.length > 0) {
        setType(data)
        return { ok: true }
      }
      if (data?.error) return { ok: false, message: data.error }
      return { ok: false }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getAllType,
  }
}

export default useGetType