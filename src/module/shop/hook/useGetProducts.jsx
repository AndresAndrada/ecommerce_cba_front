import { useState } from 'react'
import { useBoundStore } from '@/store/index'
import { shallow } from 'zustand/shallow'
import { Moralis } from 'moralis-v1'
import { Services } from '@/services'

function useGetProducts() {
    const [loading, setLoading] = useState(false)

    const { setProducts, setProductById, setTotalProductsPages, setCategories } =
        useBoundStore((state) => state, shallow)
    const getAllProducts = async (
        page,
        proConsumer,
        proName,
        proCategory
    ) => {
        setLoading(true)
        try {
            const response = await Moralis.Cloud.run(
                Services.products.getAllProducts,
                {
                    page,
                    proConsumer,
                    proName,
                    proCategory,
                }
            )

            const { products: productsResponse, totalPages } = response.products

            const products = productsResponse?.map((product) => {
                return {
                    objectId: product.id,
                    ...product.attributes,
                }
            })
            setTotalProductsPages(totalPages)
            setProducts(products)
        } catch (error) {
            console.error('🚀 error al traer los productos', error)
            setProducts([])
            setTotalProductsPages(0)
        } finally {
            setLoading(false)
        }
    }

    const getProductById = async (productsId) => {
        setLoading(true)
        try {
            const response = await Moralis.Cloud.run(
                Services.products.getProductsById,
                {
                    productsId,
                }
            )

            const Product = {
                objectId: response.products.id,
                ...response.products.attributes,
            }

            setProductById(Product)
        } catch (error) {
            console.error('🚀 error al traer el producto', error)
        } finally {
            setLoading(false)
        }
    }

    const getAllCategories = async (proConsumer) => {
        try {
            const reaponse = await Moralis.Cloud.run(
                Services.products.getAllCategories,
                {
                    proConsumer,
                }
            )
            setCategories(reaponse.categories)
        } catch (error) {
            console.error('🚀 error al traer las categorias', error)
            setCategories([])
        }
    }
    return {
        getAllProducts,
        getAllCategories,
        getProductById,
        loading,
    }
}

export default useGetProducts