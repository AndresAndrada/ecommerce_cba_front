import axios from "axios";
import { useProductStore, useUserStore } from "../../../stores";

function usePatchImageProduct() {
  const { User } = useUserStore((state) => state);
  const { Products, setProducts } = useProductStore((state) => state);

  const patchImageProduct = async (values) => {
    try {
      console.log(Products?.objectId, 'ID PRODUCT', values, 'VALUES');
      let data;  // Inicializamos la variable data
      if (Products?.objectId) {
        // No redeclaramos 'data' aquí; la usamos sin inicializarla de nuevo
        const idProduct = Products.objectId;
        // Crea un FormData para enviar la imagen
        console.log(values, 'VALUES IMAGE');
        const formData = new FormData();
        formData.append('image', values);  // Asegúrate de que 'values' sea un File válido
        // Envía la petición PATCH para actualizar la imagen del producto
        console.log(formData, 'FORM DATA');
        const resImg = await axios.patch(`/products/${idProduct}`, formData, {
          headers: {
            'Authorization': User.tokenSession,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(resImg, 'RESIMAGE');

        // Actualiza el estado con el producto nuevo
        // Aquí asume que el valor actualizado del producto está en resImg.data
        data = resImg?.data;  // Usamos la respuesta de resImg para asignar a 'data'

        setProducts({
          ...Products,          // Mantén el estado previo de 'Products'
          ...data,              // Actualiza con la nueva data del producto
        });

        return { ok: true };
      }

      // Si data tiene un mensaje de error
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
