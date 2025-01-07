import axios from "axios";
import { useProductStore, useUserStore } from "../../../stores";

function usePatchImageProduct() {
  const { User } = useUserStore((state) => state);
  const { Products, setProducts } = useProductStore((state) => state);

  const patchImageProduct = async (values) => {
    try {
      if (Products?.objectId) {
        console.log(values, 'ARCHIVOOOO IMAGE');
        const idProduct = Products.objectId;
        const formData = new FormData();
        if (!(values instanceof File)) {
          console.error('El valor no es un archivo válido:', values);
          return { ok: false, message: 'La imagen no es válida' };
        }
        formData.append('image', values, values.name);
        console.log(values, 'values.image');
        console.log(formData, 'FORM DATA');
        const { data } = await axios.patch(
          `/products/image/${idProduct}`,
          formData,
          {
            headers: {
              'Authorization': User.tokenSession,
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        console.log(data, 'RESIMAGE');
        setProducts({
          ...Products,
          ...data,
        });
        return { ok: true };
      }
      // if (data?.message) return { ok: false, message: data?.message };
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
