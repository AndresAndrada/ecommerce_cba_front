import { ListProduct } from '../list-product'

export const List = (products, setProduct) => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-start items-center lg:items-start mb-5 flex-grow">
      <div className="flex flex-col w-full items-center lg:items-start gap-4">
        {products?.map((e, index) => {
          return (
            <ListProduct
              key={index}
              product={e}
              setProduct={setProduct}
            />
          )
        })}
        {products?.length === 0 && (
          <p className="flex w-full text-primary justify-center">
            No hay productos en el carrito
          </p>
        )}
      </div>
    </div>
  )
}