/* eslint-disable react/prop-types */
import { ProductCard } from './ProductCard'

export default function ProductsGrid({ products }) {
    return (
        <div className="max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mx-auto">
            {products.map((product) => (
                <ProductCard key={product.objectId} product={product} />
            ))}
        </div>
    )
}