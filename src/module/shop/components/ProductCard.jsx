/* eslint-disable react/prop-types */
import { scrollToTop } from '../../../utils/scrollToTop'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useProductStore } from '../../../stores'

const formatTextLength = (text) => {
  if (text.length > 14) {
    return `${text.substring(0, 10)}...`
  }

  return text
}

export const ProductCard = ({ product }) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { setItemsInCart } = useProductStore((state) => state)

  const handleAddShoppingCard = (newItem) => {
    const currentItemsString = localStorage.getItem('shoppingCard')
    let currentItems = []
    if (currentItemsString) currentItems = JSON.parse(currentItemsString)
    currentItems.push(newItem)
    localStorage.setItem('shoppingCard', JSON.stringify(currentItems))
    setItemsInCart(currentItems.length)
    toast.success('Producto agregado al carrito')
  }
  return (
    <div className="card min-w-[238px] h-[274px] shadow-xl bg-white rounded-lg overflow-hidden">
      <Link
        onClick={() => scrollToTop({ smooth: false })}
        to={`/product/${product?.objectId}`}
      >
        <figure className="h-[150px]">
          <img
            className="object-cover"
            src={product?.productImage}
            alt={product?.proName}
          />
        </figure>
      </Link>
      <div className="card-body px-4 py-7 justify-between">
        <div className="card-title justify-between text-base">
          <h2 className="max-w-[55%]">{product.proName}</h2>
          <div
            title={product.proCategory}
            className="px-3 py-1 text-center rounded-full bg-primary text-xs text-white"
          >
            {formatTextLength(product.proCategory)}
          </div>
        </div>

        <div className="card-actions justify-between">
          <div className="font-medium">{product.proPrice.toFixed(2)} €</div>
          <div className="cursor-pointer">
            {
              <ShoppingCartIcon
                className="h-6 text-secondary"
                onClick={() => handleAddShoppingCard(product)}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}