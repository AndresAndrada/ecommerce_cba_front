import axios from "axios";
import { useProductStore, useUserStore } from "../../../stores";

function useCreateProduct() {
  const { User } = useUserStore((state) => state);
  const { setProducts } = useProductStore(state => state)

  const createProduct = async (values) => {
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
      });
      if (data?.newProducto?.id !== undefined) {
        const resImg = await axios.patch(`/products/${data?.newProducto?.id}`, { image: values.image }, {
          headers: {
            'Authorization': User.tokenSession,
            'Content-Type': 'multipart/form-data'
          }
        })
        setProducts({
          objectId: data.objectId,
          ...data,
          ...resImg,
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