import { scrollToTop } from '../../../utils/scrollToTop'
import { Link } from 'react-router-dom'

export default function LandingSection() {
    return (
        <div className="w-full p-6 sm:p-12 lg:p-24 bg-primary flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-10 lg:gap-16">
            <img
                src="https://res.cloudinary.com/dge3tzzsh/image/upload/v1715005594/gravitad_general/022-assets/chica-comiendo_kveczn.webp"
                alt="Mujer almorzando en la calle"
                className="object-cover h-[372px] w-[380px] max-w-full rounded-md shadow-xl"
            />

            <div className="text-secondary max-w-[600px] flex flex-col justify-center items-center gap-6 p-6">
                <h4 className="text-2xl lg:text-4xl font-bold text-center">
                    Aquí, nos preocupamos por ti y por tus gustos
                </h4>
                <p className="max-w-[600px] text-center">
                    Por eso, te brindamos los mejores productos, adaptados a tus necesidades específicas, para que puedas compartir la experiencia unica de tomar unos buenos mates.
                </p>
                <Link
                    onClick={() => scrollToTop({ smooth: false })}
                    to="/recipes"
                    className="button__secondary font-medium w-[200px] flex justify-center items-center button__white hover:ring-2 hover:ring-slate-400 active:ring-slate-300 focus:bg-orange-200"
                >
                    Ver recetas
                </Link>
            </div>
        </div>
    )
}