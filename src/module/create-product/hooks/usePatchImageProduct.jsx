import axios from "axios";
import { useProductStore, useUserStore } from "../../../stores";

function usePatchImageProduct() {
  const { User } = useUserStore((state) => state);
  const { Products, setProducts } = useProductStore((state) => state);

  const patchImageProduct = async (values) => {
    try {
      let data;  // Inicializamos la variable data
      if (Products?.objectId) {
        const idProduct = Products.objectId;
        console.log(values, 'VALUES IMAGE');
        const formData = new FormData();
        formData.append('image', values);
        // formData.append('upload_preset', 'ecommerce-cba')
        console.log(formData, 'FORM DATAAAA');
        const resImg = await axios.patch(`/products/${idProduct}`, formData, {
          headers: {
            'Authorization': User.tokenSession,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(resImg, 'RESIMAGE');
        data = resImg?.data;
        setProducts({
          ...Products,
          ...data,
        });
        return { ok: true };
      }
      if (data?.message) return { ok: false, message: data?.message };
      return { ok: false };
    } catch (error) {
      console.log(error);
      return { ok: false, error: error.message };
    }
  };

  return {
    patchImageProduct,
  };
}

export default usePatchImageProduct;
