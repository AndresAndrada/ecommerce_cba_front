import axios from "axios";
import { useUserStore } from "../../../stores";

function useCreateProduct() {
    const { User, setUser, setAuthenticated } = useUserStore((state) => state);

    const createProduct = async (values) => {
        console.log(User, 'USERRR');

        try {
            const productValues = {
                idType: values.type,
                product: {
                    name_product: values.name_product,
                    description: {
                        description: values.description,
                        descriptionPromotion: values.descriptionPromotion
                    },
                    pirce: {
                        minorista: values.minorista,
                        mayorista: values.mayorista,
                        pricePromotion: values.pricePromotion
                    },
                    stock: values.stock
                }
            }
            const { data } = await axios.post('/products', productValues, {
                headers: {
                    'Authorization': User.tokenSession
                }
            })
            console.log(data, 'DATAAA');

            if (data?.newProducto?.id !== undefined) {
                setAuthenticated(true)
                setUser({
                    objectId: data.objectId,
                    ...data,
                })
                return { ok: true }
            }
            if (data?.message) {
                return { ok: false, message: data?.message }
            }
            return { ok: false }
        } catch (error) {
            console.log(error)
        }
    }
    return {
        createProduct,
    }
}

export default useCreateProduct