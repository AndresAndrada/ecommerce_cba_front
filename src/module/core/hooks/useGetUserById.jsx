import axios from "axios";
import { useUserStore } from "../../../stores";

function useGetUserById() {
  const { User, setUserById } = useUserStore((state) => state);

  const getById = async (id) => {
    try {
      const { data } = await axios.get(`/users/${id}`, {
        headers: {
          'Authorization': User.tokenSession,
        }
      })
      if (data?.id) setUserById(data);
      return
    } catch (error) {
      console.log(error);
    }
  }

  return { getById };
}

export default useGetUserById;