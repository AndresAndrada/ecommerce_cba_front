import { scrollToTop } from '../../../utils/scrollToTop'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../stores'

export default function CreatePetsSection() {
  const navigate = useNavigate()
  const { Authenticated } = useUserStore((state) => state)

  const handleAddPets = () => {
    if (Authenticated) {
      // navigate(Routes.profile)
      scrollToTop({ smooth: false })
    } else {
      toast((t) => (
        <div className="flex flex-col justify-center items-center gap-4">
          <p>🐶 Debes ingresar a tu cuenta!</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="button__primary hover:ring-2 hover:ring-orange-600 active:bg-orange-600 focus:bg-orange-500"
              onClick={() => {
                toast.dismiss(t.id)
              }}
            >
              Luego
            </button>
            <button
              type="button"
              className="button hover:ring-2 hover:ring-orange-600 active:bg-orange-600 focus:bg-orange-500"
              onClick={() => {
                toast.dismiss(t.id)
                navigate('/sign-in')
              }}
            >
              Ingresar
            </button>
          </div>
        </div>
      ))
    }
  }
  return (
    <section className="w-full flex flex-col sm:flex-row">
      <div className="h-[352px] min-h-[20vh] w-full sm:w-1/2">
        <img
          src="https://res.cloudinary.com/dge3tzzsh/image/upload/v1715005594/gravitad_general/022-assets/mirando-el-paisaje_g2imnt.webp"
          alt="Perosna y mascota mirando el paisaje montañoso"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="bg-primary w-full sm:w-1/2 h-[352px] min-h-[20vh] flex flex-col items-center justify-center gap-6 p-4 text-secondary">
        <h4 className="text-2xl lg:text-4xl font-bold text-center">
          Crea perfiles de control para tus peludos amigos
        </h4>
        <p className="max-w-[600px] text-center">
          Ahora puedes asegurarte de que estén recibiendo la nutrición adecuada
          de manera fácil y personalizada. En la App, agregar los datos de tus
          mascotas para un control nutricional efectivo es tan sencillo como
          darles un regalo.
        </p>
        <button
          type="button"
          onClick={handleAddPets}
          className="button__white font-medium w-[200px] flex justify-center items-center hover:ring-2 hover:ring-slate-400 active:ring-slate-300 focus:bg-orange-200"
        >
          Agregar mascotas
        </button>
      </div>
    </section>
  )
}