import { Link } from 'react-router-dom'
import img from '../../../assets/react.svg'
import { scrollToTop } from '../../../utils/scrollToTop'

export default function BenefitsSection() {
    return (
        <section className="min-h-[65vh] flex flex-col justify-center items-center gap-8 sm:gap-14 pb-10 sm:py-6 text-foreground">
            <h2 className="text-2xl sm:text-4xl xl:text-6xl text-secondary font-semibold tracking-tighter text-center">
                Beneficio de nuestros productos de calidad
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-evenly w-full max-w-[1300px]">
                <div className="flex flex-col gap-4 items-center justify-start w-[341px] max-w-full min-h-[341px] px-4 lg:px-12">
                    <img
                        src={img}
                        alt="Corazón verde con un check"
                        className="h-[151.3px] w-auto mb-4"
                    />
                    <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
                        Salud óptima
                    </h4>
                    <p className="text-center text-secondary">
                        Una alimentación adecuada es clave para una vida feliz y saludable
                        juntos.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center justify-start w-[341px] max-w-full min-h-[341px] px-4 lg:px-12">
                    <img
                        src={img}
                        alt="Mano verde con una patita de animal dentro"
                        className="h-[151.3px] w-auto mb-4"
                    />
                    <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
                        Vínculo emocional
                    </h4>
                    <p className="text-center text-secondary">
                        Cada momento compartido al preparar y disfrutar comidas nutritivas
                        refuerza ese vínculo especial único entre ustedes
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center w-[341px] max-w-full min-h-[341px] px-12">
                    <img
                        src={img}
                        alt="Persona con su mascota"
                        className="h-[151.3px] w-auto px-4 lg:mb-4"
                    />
                    <h4 className="text-2xl text-secondary font-semibold tracking-tight text-center">
                        Calidad de vida
                    </h4>
                    <p className="text-center text-secondary">
                        Imagina una vida vibrante junto a tu mascota. Con una dieta
                        equilibrada, esa visión se hace realidad.
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
    )
}
