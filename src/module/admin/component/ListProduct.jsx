import { useBoundStore } from '@/store'
import { TrashIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react';
import { shallow } from 'zustand/shallow'


export const ListProduct = ({ product, setProduct }) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { setItemsInCart } = useBoundStore((state) => state, shallow)
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleOpenModal = () => {
    modalRef.current?.showModal()
  }

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close()
    }
  }

  const handleDelete = (items) => {
    const currentItemsString = localStorage.getItem('shoppingCard')
    let currentItems = []
    if (currentItemsString) {
      currentItems = JSON.parse(currentItemsString)
    }
    const indexToRemove = currentItems.findIndex(
      (item) => item.objectId === items
    )
    if (indexToRemove !== -1) {
      currentItems.splice(indexToRemove, 1)
      localStorage.setItem('shoppingCard', JSON.stringify(currentItems))
      setProduct(currentItems)
      setItemsInCart(currentItems.length)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[562px] py-2 px-5 bg-primary rounded-lg">
      <div className="flex items-center justify-between w-full">
        <p className="text-white w-3/5 font-Verdana text-base font-normal">
          {product?.proCategory ? product.proName : 'Producto'}
        </p>
        <div className="flex justify-between w-2/5">
          <p className="text-white font-Verdana text-base font-normal">
            {product?.proPrice ? `€ ${product.proPrice}` : 'Precio'}
          </p>
          <TrashIcon
            className="size-6 text-white cursor-pointer"
            onClick={handleOpenModal}
          />
        </div>
        <dialog id="my_modal_2" ref={modalRef} className="modal">
          <div className="flex flex-col w-[20rem] items-center modal-box bg-white">
            <ShieldExclamationIcon className="size-16 text-secondary cursor-pointer" />
            <div className="justify-center items-center text-center w-44">
              <p className="py-4 text-secondary ">
                ¿Está seguro de eliminar este producto?
              </p>
            </div>
            <div className="modal-action">
              <form method="dialog" className="flex items-start gap-x-3">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn flex text-white items-center border-transparent justify-center w-20 px-4 py-2 gap-2 bg-secondary hover:bg-primary hover:border-transparent"
                  onClick={() => handleDelete(product.objectId)}
                >
                  Si
                </button>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn flex text-white items-center border-transparent justify-center w-20 px-4 py-2 gap-2 bg-secondary hover:bg-primary hover:border-transparent"
                  onClick={handleCloseModal}
                >
                  No
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}