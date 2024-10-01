// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import { Pagination } from '../module/core/ui/Pagination'
import NavigationShop from '../module/shop/components/NavigationShop'
import ProductsGrid from '../module/shop/components/ProductsGrid'
// import productsData from '@/modules/shop/mock/products_data.json'
// import useGetProducts from '../module/shop/hooks/useGetProducts'
// import { useDebounce } from '@uidotdev/usehooks'
import { Loader } from '../module/core/Loader'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useProductStore } from '../stores'
import useGetProduct from '../module/shop/hook/useGetProduct'

// const DEBOUNCE_TIME = 500

export default function Shop() {
  const {
    Products,
    TotalProductsPages,
    CurrentProductsPage,
    setCurrentProductsPage,
    SelectedTab,
    setSelectedTab,
    ConsumerProducts,
    setConsumerProducts,
  } = useProductStore((state) => state)
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState('')
  // const debounceSearch = useDebounce(search, DEBOUNCE_TIME)
  console.log(Products, 'PRODUCT');

  const { getAllProducts, } = useGetProduct()
  // biome-ignore lint/correctness/useExhaustiveDependencies: <suppressions/parse>
  // useEffect(() => {
  //     getAllCategories(queryPath[ConsumerProducts])
  // }, [ConsumerProducts])
  // // biome-ignore lint/correctness/useExhaustiveDependencies: <suppressions/parse>
  useEffect(() => {
    getAllProducts();
  }, [])

  const handleSearch = (name) => {
    setCurrentProductsPage(1)
    setSearch(name)
  }

  return (
    <main className="min-h-screen bg-primary">
      <header
        className={clsx('w-full h-[200px] lg:h-[341px] bg-cover bg-no-repeat', {
          'bg-banner_person bg-[center_top_-1rem] sm:bg-[center_top_-2rem] lg:bg-[center_top_-5rem] xl:bg-[center_top_-7rem]':
            ConsumerProducts === 'Minorista',
          'bg-banner_pet bg-[center_top_-4rem] sm:bg-[center_bottom_-4rem] lg:bg-[center_bottom_-3rem] xl:bg-[center_bottom_-6rem] 2xl:bg-[center_bottom_-12rem]':
            ConsumerProducts === 'Mayorista',
        })}
      />
      <NavigationShop
        option={ConsumerProducts}
        setOption={setConsumerProducts}
        setCurrentPage={setCurrentProductsPage}
        setSearch={handleSearch}
        selectedTab={SelectedTab}
        setSelectedTab={setSelectedTab}
      />
      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <Loader className="h-[4rem] w-[4rem]" />
        </div>
      ) : (
        <>
          {Products?.length === 0 ? (
            <div className="h-[300px] w-full flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <FaceFrownIcon className="h-16 text-secondary" />
                <p className="text-xl text-secondary">No se encontrar productos</p>
              </div>
            </div>
          ) : (
            <div className="h-[300px] mx-4">
              <ProductsGrid products={Products} />
            </div>
          )}

          {TotalProductsPages > 1 && (
            <Pagination
              currentPage={CurrentProductsPage}
              setCurrentPage={setCurrentProductsPage}
              pages={TotalProductsPages}
            />
          )}
        </>
      )}
    </main>
  )
}