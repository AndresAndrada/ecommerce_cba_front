import axios from "axios";
import { useProductStore } from "../../../stores";

function useGetProductId() {
    const { setProductId } = useProductStore(state => state)

    const getProductId = async (id) => {
        try {
            // Envío de la petición POST para crear el producto
            const { data } = await axios.get(`/products/${id}`);
            if (data?.id !== undefined) {
                setProductId(data);
                return { ok: true };
            }
            if (data?.message) return { ok: false, message: data?.message };
            return { ok: false };
        } catch (error) {
            console.log(error);
        }
    };
    return {
        getProductId,
    }
}

export default useGetProductId