/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from 'formik'
import { CreateProduct } from '../../../schemas'
import { DialogEditImgUser } from './dialog-edit-img-user'
import { useNavigate } from 'react-router-dom'
import useCreateProduct from '../hooks/useCreateProduct'
import useGetType from '../hooks/useGetType'
import { useTypeStore } from '../../../stores'
import { MdOutlineAttachMoney } from "react-icons/md";
import img from '../../../assets/icons/user-circle.svg'

export const FormCreateProduct = () => {
  const [showPromotion, setShowPromotion] = useState(false);
  const productAvatar = img;
  const [selectedFile, setSelectedFile] = useState(productAvatar);
  const [loading, setLoading] = useState(false);
  const { Type } = useTypeStore();
  const navigate = useNavigate();
  const { createProduct } = useCreateProduct();
  const { getAllType } = useGetType();

  const handleImageChange = (event) => {
    console.log('ENTREEE');
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setSelectedFile(URL.createObjectURL(event.currentTarget.files[0]))
      formik.setFieldValue('fileimage', event.currentTarget.files[0])
    }
  }

  useEffect(() => {
    getAllType();
  }, [])

  const formik = useFormik({
    initialValues: {
      type: '',
      name_product: '',
      description: '',
      descriptionPromotion: '',
      minorista: 0,
      mayorista: 0,
      pricePromotion: 0,
      stock: ''
    },
    validationSchema: CreateProduct,
    onSubmit: async (values, { resetForm }) => {
      // values.name_product = values.email.split('@')[0]
      try {
        // await createProduct(values)
        const res = await createProduct(values)
        if (res?.ok) {
          setLoading(true)
          resetForm()
          toast.success('Producto creado con éxito', {
            duration: 2000,
            position: 'top-center',
          })
          navigate('/')
          setLoading(false)
        } else {
          setLoading(false)
          toast.error(res.data.message, {
            duration: 4000,
            position: 'top-center',
          })
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        toast.error('Algo salio mal, vuelve a intentarlo', {
          duration: 3000,
          position: 'top-center',
        })
      }
    },
  })
  return (
    <div className="w-11/12 max-[100rem] sm:max-w-[40rem] inline-flex p-9 flex-col justify-center items-center gap-8 rounded-lg bg-white shadow-xl">
      <div>
        <Toaster />
      </div>
      <h1 className="text-teal-700 text-center font-product-sans font-bold text-lg leading-normal">
        Crear Producto
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full inline-flex flex-col justify-center items-center gap-5"
      >
        <div className="w-48">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <div className="flex justify-center items-center gap-x-5">
            <DialogEditImgUser
              handleImageChange={handleImageChange}
              loading={loading}
              selectedFile={selectedFile}
              img={productAvatar}
              handleSubmit={formik.handleSubmit}
            />
          </div>
        </div>
        <div className='w-[90%] sm:max-w-[70%] flex flex-col sm:flex-col md:flex-row justify-center gap-3 sm:gap-10 '>
          <div className='w-full flex flex-col gap-5'>

            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Nombre
                </label>
              </div>
              <input
                type="text"
                placeholder="Nombre producto"
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.name_product && formik.errors.name_product ? 'border-red-500' : 'border-teal-700'
                  }`}
                onBlur={formik.handleBlur}
                // onError={formik.touched.name_product && Boolean(formik.errors.name_product)}
                onChange={formik.handleChange}
                value={formik.values.name_product}
                id="name_product"
                name="name_product"
                autoComplete="name_product"
              />
              {formik.touched.name_product && (
                <p
                  id="name_product-error"
                  className="text-center min-w-3 text-red-600 text-xs"
                >
                  {formik.errors.name_product}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Tipo
                </label>
              </div>
              <select
                type="type"
                placeholder="Tipo de producto"
                className={`select input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 ${formik.touched.type && formik.errors.type ? 'border-red-500' : 'border-teal-700'}  placeholder-teal-700 rounded-lg focus:border-primary`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.type}
                id="type"
                name="type"
                autoComplete="type"
              >
                <option value="" className="text-teal-700">
                  Tipo de producto
                </option>
                {Type?.length > 0 && Type.map(type => {
                  return <><option value={type.id} className='text-teal-700' key={type.id}>{type.name_type}</option>
                  </>
                })
                }
              </select>
              {formik.touched.type && (
                <p
                  id="type-error"
                  className="text-center min-w-3 text-red-600 text-xs"
                >
                  {formik.errors.type}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Descripción
                </label>
              </div>
              <label
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-teal-700'
                  }`}
              >
                <input
                  type='text'
                  className="grow placeholder-teal-700"
                  placeholder="Descripción"
                  id="description"
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  // onError={
                  //   formik.touched.description && Boolean(formik.errors.description)
                  // }
                  autoComplete="current-description"
                  onChange={formik.handleChange}
                />
              </label>
              {formik.touched.description && (
                <p
                  id="email-error"
                  className="text-center min-w-3 text-red-600 text-xs"
                >
                  {formik.errors.description}
                </p>
              )}
            </div>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Precios minorista <span className='text-gray-400'>{"(opcional)"}</span>
                </label>
              </div>
              <label
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.minorista && formik.errors.minorista ? 'border-red-500' : 'border-teal-700'
                  }`}
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="minorista"
                  onBlur={formik.handleBlur}
                  value={formik.values.minorista ? formik.values.minorista : ''}
                  // onError={
                  //   formik.touched.mayorista && Boolean(formik.errors.mayorista)
                  // }
                  autoComplete="current-minorista"
                  onChange={formik.handleChange}
                />
                <MdOutlineAttachMoney className='text-customColor' />
              </label>
              {formik.touched.minorista && (
                <p
                  id="email-error"
                  className="text-center min-w-3 text-red-600 text-xs"
                >
                  {formik.errors.minorista}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Precios mayorista <span className='text-gray-400'>{"(opcional)"}</span>
                </label>
              </div>
              <label
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.mayorista && formik.errors.mayorista ? 'border-red-500' : 'border-teal-700'
                  }`}
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="mayorista"
                  onBlur={formik.handleBlur}
                  value={formik.values.mayorista ? formik.values.mayorista : ''}
                  // onError={
                  //   formik.touched.mayorista && Boolean(formik.errors.mayorista)
                  // }
                  autoComplete="current-mayorista"
                  onChange={formik.handleChange}
                />
                <MdOutlineAttachMoney className='text-customColor' />
              </label>
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Stock
                </label>
              </div>
              <label
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.stock && formik.errors.stock ? 'border-red-500' : 'border-teal-700'
                  }`}
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="stock"
                  onBlur={formik.handleBlur}
                  value={formik.values.stock}
                  // onError={
                  //   formik.touched.stock && Boolean(formik.errors.stock)
                  // }
                  autoComplete="current-stock"
                  onChange={formik.handleChange}
                />
                <span className='text-customColor text-xs'>cant.</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-36">
          <label className="label cursor-pointer flex flex-col gap-2">
            <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">Promoción</label>
            <input type="checkbox" className={`toggle [--tglbg:white] ${showPromotion ? 'bg-green-950 border-green-950' : ''}`} onClick={() => setShowPromotion(!showPromotion)} />
          </label>
        </div>
        {showPromotion && (
          <div className='w-[90%] sm:max-w-[70%] flex flex-col sm:flex-col md:flex-row justify-center gap-3 sm:gap-10 '>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Descripción promoción
                </label>
              </div>
              <label
                className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formik.touched.descriptionPromotion && formik.errors.descriptionPromotion ? 'border-red-500' : 'border-teal-700'
                  }`}
              >
                <input
                  type='text'
                  className="grow placeholder-teal-700"
                  placeholder="Descripción"
                  id="descriptionPromotion"
                  onBlur={formik.handleBlur}
                  value={formik.values.descriptionPromotion}
                  // onError={
                  //   formik.touched.descriptionPromotion && Boolean(formik.errors.descriptionPromotion)
                  // }
                  autoComplete="current-descriptionPromotion"
                  onChange={formik.handleChange}
                />
              </label>
            </div>
            <div className='w-full flex flex-col gap-5'>
              <div className="flex flex-col w-full items-start gap-2">
                <div className="flex px-4 justify-end items-start gap-2">
                  <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                    Precios promoción <span className='text-gray-400'>{"(opcional)"}</span>
                  </label>
                </div>
                <label
                  className={
                    formik.touched.promotionPrice && formik.errors.promotionPrice
                      ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                      : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                  }
                >
                  <input
                    type="number"
                    className="grow placeholder-teal-700"
                    placeholder='0'
                    id="promotionPrice"
                    onBlur={formik.handleBlur}
                    value={formik.values.promotionPrice}
                    autoComplete="promotionPrice"
                    onChange={formik.handleChange}
                  />
                  <MdOutlineAttachMoney className='text-customColor' />
                </label>
                {formik.touched.promotionPrice && (
                  <p
                    id="promotionPrice-error"
                    className="text-center min-w-3 w-72 text-red-600 text-xs"
                  >
                    {formik.errors.promotionPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="w-48">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={
              formik.dirty && formik.isValid
                ? 'flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-teal-700 text-white hover:bg-primary'
                : 'flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-gray-500 text-white'
            }
            disabled={!(formik.dirty && formik.isValid && formik.values)}
          >
            Crear producto
          </button>
        </div>
      </form>
    </div>
  )
}