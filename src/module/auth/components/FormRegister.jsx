import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from 'formik'
import { RegisterScheme } from '../../../schemas'
import showPasswordIcon from '../../../assets/svg/showPassword.svg'
import hidePasswordIcon from '../../../assets/svg/showPassword.svg'
import { useNavigate } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp'

export const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useSignUp()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      userFullName: '',
    },
    validationSchema: RegisterScheme,
    onSubmit: async (values, { resetForm }) => {
      // console.log(JSON.stringify(values))
      values.username = values.email.split('@')[0]
      try {
        const res = await signUp(values)
        if (res?.ok) {
          navigate('/sign-in')
          resetForm()
          toast.success('Cuenta creada con éxito', {
            duration: 2000,
            position: 'top-center',
          })
        } else {
          console.log(res, 'RESPONSE');

          toast.error(res.data.message, {
            duration: 4000,
            position: 'top-center',
          })
        }
      } catch (error) {
        console.log(error)
        toast.error('Algo salio mal, vuelve a intentarlo', {
          duration: 3000,
          position: 'top-center',
        })
      }
    },
  })
  return (
    <div className="w-11/12 max-w-96 sm:w-96 inline-flex p-6 flex-col justify-center items-center gap-8 rounded-lg bg-white shadow-xl">
      <div>
        <Toaster />
      </div>
      <h1 className="text-teal-700 text-center font-product-sans font-bold text-lg leading-normal">
        Iniciar de sesión
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full inline-flex flex-col justify-center items-center gap-8"
      >
        <div className="flex flex-col w-full items-start gap-2">
          <div className="flex px-4 justify-end items-start gap-2">
            <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
              Nombre de usuario
            </label>
          </div>
          <input
            type="text"
            placeholder="Nombre completo"
            className={
              formik.touched.userFullName && formik.errors.userFullName
                ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500  placeholder-teal-700 rounded-lg focus:border-primary'
                : 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-teal-700  placeholder-teal-700 rounded-lg focus:border-primary'
            }
            onBlur={formik.handleBlur}
            // onError={formik.touched.userFullName && Boolean(formik.errors.userFullName)}
            onChange={formik.handleChange}
            value={formik.values.userFullName}
            id="userFullName"
            name="userFullName"
            autoComplete="userFullName"
          />
          {formik.touched.userFullName && (
            <p
              id="userFullName-error"
              className="text-center min-w-3 w-72 text-red-600 text-xs"
            >
              {formik.errors.userFullName}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full items-start gap-2">
          <div className="flex px-4 justify-end items-start gap-2">
            <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
              Correo
            </label>
          </div>
          <input
            type="text"
            placeholder="Correo"
            className={
              formik.touched.email && formik.errors.email
                ? 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500  placeholder-teal-700 rounded-lg focus:border-primary'
                : 'input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-teal-700  placeholder-teal-700 rounded-lg focus:border-primary'
            }
            onBlur={formik.handleBlur}
            // onError={formik.touched.email && Boolean(formik.errors.email)}
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            name="email"
            autoComplete="email"
          />
          {formik.touched.email && (
            <p
              id="email-error"
              className="text-center min-w-3 w-72 text-red-600 text-xs"
            >
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full items-start gap-2">
          <div className="flex px-4 justify-end items-start gap-2">
            <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
              Contraseña
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
              type={showPassword ? 'text' : 'password'}
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
            {showPassword ? (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <img
                src={showPasswordIcon}
                alt=""
                className="h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <img
                src={hidePasswordIcon}
                alt=""
                className="h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
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
        <div className="w-full">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={
              formik.dirty && formik.isValid
                ? 'flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-teal-700 text-white hover:bg-primary'
                : 'flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-gray-500 text-white'
            }
            disabled={!(formik.dirty && formik.isValid && formik.values)}
          >
            Crear cuenta
          </button>
          <div className="flex justify-center items-start gap-2 pt-2">
            <h6 className="text-primary text-center font-productsans text-xs font-normal">
              {' '}
              Ya tienes cuenta?
            </h6>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h6
              className="text-secondary text-center font-productsans text-xs font-semibold cursor-pointer"
              onClick={() => navigate('/sign-in')}
            >
              Iniciar sesión
            </h6>
          </div>
        </div>
      </form>
    </div>
  )
}