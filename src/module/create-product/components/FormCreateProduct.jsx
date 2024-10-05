/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from 'formik'
import { CreateProduct } from '../../../schemas'
import showPasswordIcon from '../../../assets/svg/showPassword.svg'
import hidePasswordIcon from '../../../assets/svg/showPassword.svg'
import { useNavigate } from 'react-router-dom'
import useCreateProduct from '../hooks/useCreateProduct'
import useGetType from '../hooks/useGetType'
import { useTypeStore } from '../../../stores'
import { MdOutlineAttachMoney } from "react-icons/md";

export const FormCreateProduct = () => {
  const [showPromotion, setShowPromotion] = useState(false);
  const { Type } = useTypeStore();
  const navigate = useNavigate();
  const { createProduct } = useCreateProduct();
  const { getAllType } = useGetType();
  console.log(Type, 'TIPOS');

  useEffect(() => {
    getAllType();
  }, [])
  const formik = useFormik({
    initialValues: {
      idType: '',
      name_product: '',
      description: '',
      descriptionPromotion: '',
      minorista: 0,
      mayorista: '',
      pricePromotion: '',
      stock: ''
    },
    validationSchema: CreateProduct,
    onSubmit: async (values, { resetForm }) => {
      console.log(JSON.stringify(values))
      // values.name_product = values.email.split('@')[0]
      // try {
      await createProduct(values)
      // const res = await createProduct(values)
      //   if (res?.ok) {
      //     navigate('/sign-in')
      resetForm()
      //     toast.success('Cuenta creada con éxito', {
      //       duration: 2000,
      //       position: 'top-center',
      //     })
      //   } else {
      //     console.log(res, 'RESPONSE');

      //     toast.error(res.data.message, {
      //       duration: 4000,
      //       position: 'top-center',
      //     })
      //   }
      // } catch (error) {
      //   console.log(error)
      //   toast.error('Algo salio mal, vuelve a intentarlo', {
      //     duration: 3000,
      //     position: 'top-center',
      //   })
      // }
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
        className="w-full inline-flex flex-col justify-center items-center gap-8"
      >
        <div className='w-[90%] sm:max-w-[70%] flex flex-col sm:flex-col md:flex-row justify-center gap-3 sm:gap-10'>
          <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Nombre
                </label>
              </div>
              <input
                type="text"
                placeholder="Nombre completo"
                className={
                  formik.touched.name_product && formik.errors.name_product
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500  placeholder-teal-700 rounded-lg focus:border-primary'
                    : 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-teal-700  placeholder-teal-700 rounded-lg focus:border-primary'
                }
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
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
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
                // onError={formik.touched.type && Boolean(formik.errors.type)}
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
                  return <><option value={type.id} className='text-teal-700'>{type.name_type}</option>
                  </>
                })
                }
              </select>
              {formik.touched.type && (
                <p
                  id="type-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
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
                className={
                  formik.touched.description && formik.errors.description
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                    : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                }
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
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
                >
                  {formik.errors.description}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Descripción promoción
                </label>
              </div>
              <input
                type="text"
                placeholder="Descripción promoción"
                className={
                  formik.touched.descriptionPromotion && formik.errors.descriptionPromotion
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500  placeholder-teal-700 rounded-lg focus:border-primary'
                    : 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-teal-700  placeholder-teal-700 rounded-lg focus:border-primary'
                }
                onBlur={formik.handleBlur}
                // onError={formik.touched.descriptionPromotion && Boolean(formik.errors.descriptionPromotion)}
                onChange={formik.handleChange}
                value={formik.values.descriptionPromotion}
                id="descriptionPromotion"
                name="descriptionPromotion"
                autoComplete="descriptionPromotion"
              />
              {formik.touched.descriptionPromotion && (
                <p
                  id="descriptionPromotion-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
                >
                  {formik.errors.descriptionPromotion}
                </p>
              )}
            </div>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Precios minorista
                </label>
              </div>
              <label
                className={
                  formik.touched.minorista && formik.errors.minorista
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                    : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                }
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="minorista"
                  onBlur={formik.handleBlur}
                  value={formik.values.minorista}
                  // onError={
                  //   formik.touched.minorista && Boolean(formik.errors.minorista)
                  // }
                  autoComplete="current-minorista"
                  onChange={formik.handleChange}
                />
                <MdOutlineAttachMoney className='text-customColor' />
              </label>
              {formik.touched.minorista && (
                <p
                  id="email-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
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
                className={
                  formik.touched.password && formik.errors.password
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                    : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                }
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  // onError={
                  //   formik.touched.password && Boolean(formik.errors.password)
                  // }
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                />
                <MdOutlineAttachMoney className='text-customColor' />
              </label>
              {formik.touched.email && (
                <p
                  id="email-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
                >
                  {formik.errors.email}
                </p>
              )}
            </div>
            {showPromotion && (<><div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Precios promoción <span className='text-gray-400'>{"(opcional)"}</span>
                </label>
              </div>
              <label
                className={
                  formik.touched.password && formik.errors.password
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                    : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                }
              >
                <input
                  type="number"
                  className="grow placeholder-teal-700"
                  placeholder='0'
                  id="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  // onError={
                  //   formik.touched.password && Boolean(formik.errors.password)
                  // }
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                />
                <MdOutlineAttachMoney className='text-customColor' />
              </label>
              {formik.touched.email && (
                <p
                  id="email-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
                >
                  {formik.errors.email}
                </p>
              )}
            </div></>)}
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Descripción
                </label>
              </div>
              <label
                className={
                  formik.touched.password && formik.errors.password
                    ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary'
                    : 'input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary'
                }
              >
                <input
                  type='text'
                  className="grow placeholder-teal-700"
                  placeholder="Contraseña"
                  id="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  // onError={
                  //   formik.touched.password && Boolean(formik.errors.password)
                  // }
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                />
              </label>
              {formik.touched.password && (
                <p
                  id="email-error"
                  className="text-center min-w-3 w-72 text-red-600 text-xs"
                >
                  {formik.errors.password}
                </p>
              )}
            </div>
          </div>
        </div>
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