import { scrollToTop } from '../../../utils/scrollToTop'
import { Link } from 'react-router-dom'

export default function ShopExplore() {
  return (
    <section className="w-full flex flex-col sm:flex-row">
      <div className="bg-complementary w-full sm:w-1/2 h-[294px] min-h-[20vh] flex flex-col items-center justify-center gap-6 p-4">
        <h4 className="text-2xl lg:text-4xl text-secondary font-bold">
          Explora nuestra tienda
        </h4>
        <p className="max-w-[600px] text-center text-secondary">
          Descubra una selección de los mejores productos para preparar
          deliciosas y saludables recetas tanto para usted como para su peludo
          amigo. ¡Haga de cada comida un momento especial lleno de amor y
          nutrición!
        </p>
        <Link
          onClick={() => scrollToTop({ smooth: false })}
          to="/shop"
          className="button w-[200px] flex justify-center items-center text-secondary button sm:w-[200px] hover:outline-none hover:ring-2 hover:ring-secondary active:bg-secondary focus:bg-secondary"
        >
          Ir a la tienda
        </Link>
      </div>

      <div className="h-[294px] min-h-[20vh] w-full sm:w-1/2">
        <img
          src="https://res.cloudinary.com/de7fyvmdp/image/upload/v1727623428/samples/Compartir_mate_p4a2aa.jpg"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  )
}