import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTop';

export default function BenefitsSection() {
  return (
    <section className="min-h-[65vh] flex flex-col justify-center items-center gap-8 sm:gap-14 pb-10 sm:py-6 text-foreground">
      <h2 className="text-2xl sm:text-4xl xl:text-6xl text-secondary font-semibold tracking-tighter text-center">
        Beneficio de nuestros productos de calidad
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-[1300px] gap-12">
        <div className="flex flex-col gap-4 items-center justify-start w-[90%] min-w[30%] sm:w-[30%] lg:w-[25%] min-h-[341px] px-4 lg:px-12">
          <img
            src="https://res.cloudinary.com/de7fyvmdp/image/upload/v1727573466/samples/Termo_dwvfwx.jpg"
            alt="Corazón verde con un check"
            className="h-[251px] lg:h-[200px] md:h-[150px] w-auto mb-4 rounded-[100%]"
          />
          <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
            Termos
          </h4>
          <p className="text-center text-secondary">
            Una alimentación adecuada es clave para una vida feliz y saludable juntos.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start w-[90%] min-w[30%] sm:w-[30%] lg:w-[25%] min-h-[341px] px-4 lg:px-12">
          <img
            src="https://res.cloudinary.com/de7fyvmdp/image/upload/v1727471411/samples/mate_fxegda.jpg"
            alt="Mano verde con una patita de animal dentro"
            className="h-[251px] lg:h-[200px] md:h-[150px] w-auto mb-4 rounded-[100%]"
          />
          <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
            Mates
          </h4>
          <p className="text-center text-secondary">
            Cada momento compartido al preparar y disfrutar comidas nutritivas refuerza ese vínculo especial único entre ustedes.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start w-[90%] min-w[30%] sm:w-[30%] lg:w-[25%] min-h-[341px] px-4 lg:px-12">
          <img
            src="https://res.cloudinary.com/de7fyvmdp/image/upload/v1727574368/samples/Canasta_Mates_ylxbmq.jpg"
            alt="Persona con su mascota"
            className="h-[251px] lg:h-[200px] md:h-[150px] w-auto mb-4 rounded-[100%]"
          />
          <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
            Canastas
          </h4>
          <p className="text-center text-secondary">
            Imagina una vida vibrante junto a tu mascota. Con una dieta equilibrada, esa visión se hace realidad.
          </p>
        </div>
      </div>
      <Link
        onClick={() => scrollToTop({ smooth: false })}
        to="/recipes"
        className="button w-[200px] flex justify-center items-center text-secondary button sm:w-[200px] hover:outline-none hover:ring-2 hover:ring-secondary active:bg-secondary focus:bg-secondary"
      >
        Descubre recetas
      </Link>
    </section>
  );
}
