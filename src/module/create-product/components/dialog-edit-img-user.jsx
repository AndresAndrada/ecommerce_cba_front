/* eslint-disable react/prop-types */
import EditIcon from '../../../assets/svg/edit-icon.svg'
import { useRef } from 'react'

export const DialogEditImgUser = ({
  handleSubmit,
  handleImageChange,
  loading,
  selectedFile,
  img,
}) => {
  const modalRef = useRef(null)
  const handleOpenModal = () => {
    modalRef.current?.showModal()
  }

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close()
    }
  }
  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={handleOpenModal}
          className="absolute ml-2  bt-10 right-[5px] top-[10px]"
        >
          <img src={EditIcon} alt="edit icon" />
        </button>
        <img
          className="w-28 h-28"
          src={selectedFile}
          alt="img user"
        />
      </div>
      <dialog id="my_modal_1" ref={modalRef} className="modal">
        <div className="bg-white p-4 rounded-md">
          <form method="dialog" onSubmit={handleSubmit}>
            <div className="relative w-56 h-56">
              <img
                src={selectedFile ? selectedFile : img}
                alt="logo-user"
                className="w-full h-full object-cover"
              />
              <label className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center cursor-pointer">
                <input
                  id="upload-input"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="bg-white border-t-2 border-primary-main p-4">
              <div className="flex justify-end">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="text-white bg-secondary border border-primary-main rounded-md px-4 py-2 hover:bg-primary-main hover:shadow-lg hover:shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-main"
                  type="submit"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  className="text-white bg-secondary border border-primary-main rounded-md px-4 py-2 hover:bg-primary-main hover:shadow-lg hover:shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-main"
                  type="submit"
                  onClick={handleCloseModal}
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}