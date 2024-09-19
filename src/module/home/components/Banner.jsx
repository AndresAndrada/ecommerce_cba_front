// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../stores"

export default function Banner() {
  const { Authenticated } = useUserStore((state) => state);
  return (
    <header className="h-[420px] 2xl:h-[528px] min-h-[30vh] overflow-hidden bg-banner bg-banner_xs sm:bg-banner_sm bg-no-repeat bg-cover">
      <div className="bg-black/20 h-full w-full flex justify-end items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 p-4 mx-2 sm:mx-6 rounded-2xl bg-white/70 lg:bg-transparent">
          <h1 className="text-2xl sm:text-4xl text-secondary sm:text-primary font-bold text-center max-w-[580px]">
            ¡Descubre los mejores productos para vida saludable y buen mate!
          </h1>
          <p className="text-center font-medium text-foreground max-w-[654px] text-secondary sm:text-xl sm:text-primary">
            ¡Regístrate ahora en nuestra plataforma y descubre un nuevo camino
            hacia una vida con unos buenos mates! Obtén acceso a dietas personalizadas
            diseñadas para ti y tu fiel compañero peludo.
          </p>
          {!Authenticated && (
            <div className="flex gap-4">
              <Link to={'/sign-up'}>
                <button
                  type="button"
                  className="button w-[125px] text-primary sm:w-[200px] hover:outline-none hover:ring-2 hover:ring-primary active:bg-primary focus:bg-primary"
                >
                  Crear cuenta
                </button>
              </Link>
              <Link to={'/sign-in'}>
                <button type="button" className="button w-[125px] text-primary sm:w-[200px] hover:outline-none hover:ring-2 hover:ring-primary active:bg-primary focus:bg-primary">
                  Iniciar sesión
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
