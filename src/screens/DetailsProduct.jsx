/* eslint-disable react-hooks/exhaustive-deps */
import { GoBackLink } from "../module/core/ui/GoBackLink"
import { useParams } from "react-router-dom"
import { useProductStore } from "../stores"
import useGetProductId from "../module/details-product/hooks/useGetProductId"
import { useEffect, useState } from "react"
import { Loader } from "../module/core/Loader"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function DetailsProduct() {
  const { id } = useParams();
  const [showPromotionMinorista, setShowPromotionMinorista] = useState(false);
  const [showPromotionMayorista, setShowPromotionMayorista] = useState(false);
  const [loading, setLoading] = useState(true);
  const { ProductId, setConsumerProducts } = useProductStore((state) => state)
  const { getProductId } = useGetProductId()
  console.log(ProductId, 'PRODUCT');

  const handleChangeCategoriMinorista = () => {
    setConsumerProducts('Minorista');
    setShowPromotionMinorista((prev) => !prev); // Alterna el estado del checkbox
    setShowPromotionMayorista(false); // Asegúrate de que el otro checkbox esté desactivado
  };

  const handleChangeCategoriMayorista = () => {
    setConsumerProducts('Mayorista');
    setShowPromotionMayorista((prev) => !prev); // Alterna el estado del checkbox
    setShowPromotionMinorista(false); // Asegúrate de que el otro checkbox esté desactivado
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <suppressions/parse>
  useEffect(() => {
    setLoading(!loading);
    getProductId(id);
    setLoading(!loading);
  }, [id])

  return (
    <main className="bg-primary py-10 w-screen">
      <div className="ml-2 sm:ml-4">
        <GoBackLink />
      </div>
      {!ProductId.id || loading ? (
        <div className="h-[400px] w-full grid place-content-center">
          <Loader className="h-[4rem] w-[4rem]" />
        </div>
      ) : (
        <div className="flex flex-col w-full justify-center flex-grow items-center sm:mt-10 mb-16 gap-10 px-4">
          <h1 className="text-2xl md:text-4xl text-secondary font-bold underline">
            {ProductId.name_product}
          </h1>
          <div className="w-full md:w-[90%] max-w-[1000px] flex flex-col items-center lg:justify-between lg:items-stretch md:flex-row gap-4">
            <article className="flex flex-col items-center justify-center 2xl:justify-between md:gap-10 w-full max-w-[300px]">
              <img
                src={ProductId.image}
                alt={ProductId.name_product}
                className="w-full max-h-[347px] object-cover md:w-[347px] md:h-[347px] rounded-lg shadow-xl"
              />
            </article>
            <div className="w-full max-w-[500px] flex flex-col justify-center items-center gap-4">
              <div className="w-full flex justify-center lg:mr-16 2xl:mr-0">
                <h1 className="text-xl md:text-4xl text-gray-700 font-bold">
                  {`${ProductId.description.description}`}
                </h1>
              </div>
              <div className="w-full max-w-[1234px] flex justify-start items-center lg:justify-center lg:mr-16 2xl:mr-0">
                <h1 className="w-auto text-sm md:text-2xl text-gray-600 font-bold">
                  {`Price minorista: `} <span className="text-secondary">{`${ProductId.price.minorista}`}</span>
                </h1>
                <div className="w-auto flex flex-grow md:flex-grow justify-end items-center">
                  <label className="w-auto label cursor-pointer flex flex-col">
                    {/* <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">Promoción</label> */}
                    <input
                      type="checkbox"
                      className={`toggle [--tglbg:white] ${showPromotionMinorista ? 'bg-teal-700 border-teal-700' : ''}`}
                      checked={showPromotionMinorista} // Controla el estado del checkbox
                      onChange={handleChangeCategoriMinorista} // Maneja el cambio
                    />
                  </label>
                </div>
              </div>
              <div className="w-full max-w-[1234px] flex justify-start items-center lg:justify-center lg:mr-16 2xl:mr-0">
                <h1 className="w-auto text-sm md:text-2xl  text-gray-600 font-bold">
                  {`Price mayorista: `} <span className="text-secondary">{`${ProductId.price.mayorista}`}</span>
                </h1>
                <div className="w-auto flex flex-grow justify-end items-center">
                  <label className="w-auto label cursor-pointer flex flex-col">
                    {/* <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">Promoción</label> */}
                    <input
                      type="checkbox"
                      className={`toggle [--tglbg:white] ${showPromotionMayorista ? 'bg-teal-700 border-teal-700' : ''}`}
                      checked={showPromotionMayorista} // Controla el estado del checkbox
                      onChange={handleChangeCategoriMayorista} // Maneja el cambio
                    />
                  </label>
                </div>
              </div>
              {ProductId?.promotion
                ? <>
                  <div className="w-full flex justify-center items-center" >
                    <h1 className="text-sm md:text-4xl text-secondary font-bold">
                      Promociones
                    </h1>
                  </div>
                  <div className="w-full max-w-[1234px] flex flex-grow justify-center items-center lg:justify-center lg:mr-16 2xl:mr-0">
                    <h1 className="w-full text-sm md:text-2xl text-gray-600 font-bold">
                      <span className="text-red-500">{`${ProductId?.description.descriptionPromotion}`}</span>
                    </h1>
                  </div>
                  <div className="w-full max-w-[1234px] flex flex-grow justify-center items-center lg:justify-center lg:mr-16 2xl:mr-0">
                    <h1 className="w-full text-sm md:text-2xl text-gray-600 font-bold">
                      {`Price promoción: `} <span className="text-red-500">{`${ProductId?.price.pricePromotion}`}</span>
                    </h1>
                  </div>
                </>
                : null}
              <div className="w-full flex justify-end items-end">
                <button
                  type="button"
                  className="button w-[50px] h-[54px] flex justify-center items-center"
                >
                  <ShoppingCartIcon
                    className="h-8 text-secondary"
                  // onClick={() => handleAddShoppingCard(product)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
