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
      <div className="h-[352px] min-h-[20vh] md:w-full sm:w-full">
        <img
          src="https://res.cloudinary.com/de7fyvmdp/image/upload/v1727576809/samples/Mates_termos_rftncv.jpg"
          alt="Perosna y mascota mirando el paisaje montañoso"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="bg-primary w-full h-[352px] min-h-[20vh] flex flex-col items-center justify-center gap-6 md:p-4 text-secondary">
        <h4 className="text-2xl lg:text-4xl font-bold text-center">
          En esta tienda puedes observar, comprar y evacuar dudas sobre el placer de compartir buenos mates
        </h4>
        <p className="max-w-[600px] text-center">
          Ahora puedes asegurarte de que estés disfrutando un buen momento con unos ricos mates. En la App, puedes incorporar buenos productos para aprovechar al maximo unos buenos mates.
        </p>
        <button
          type="button"
          onClick={handleAddPets}
          className="button__white font-medium w-[200px] flex justify-center items-center hover:ring-2 hover:ring-slate-400 active:ring-slate-300 focus:bg-orange-200"
        >
          Ir a la tienda
        </button>
      </div>
    </section>
  )
}