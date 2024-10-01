import LOGO from '../../../assets/svg/negativo.svg'
import instagram from '../../../assets/icons/instagram.svg'
import X from '../../../assets/icons/x.svg'
import gmail from '../../../assets/icons/gmail.svg'

export default function Footer() {
  return (
    <footer>
      <footer className="footer p-10 bg-secondary text-base-content justify-around text-center">
        <aside>
          <img src={LOGO} alt="Logo" className="w-48" />
        </aside>
        <nav className="flex flex-col items-center">
          <h6 className="text-[20px] font-black text-white text-center">
            Sobre nosotros
          </h6>
          <p className=" w-44 text-white">
            {' '}
            Lorem ipsum dolor sit amet consectetur. .
          </p>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-[20px] font-black text-white">
            Mantente Contectado
          </h6>
          <div className="grid gap-4 mt-2">
            <a
              href="https://www.instagram.com/grupomate.ar/?hl=es-la"
              className="flex gap-3 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="gmail" /> Instagram
            </a>
            <a
              href="https://twitter.com/?lang=en"
              className="flex gap-3 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <img src={X} alt="red social X" /> X
            </a>
            <a
              href="/"
              className="flex gap-3 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" /> Gmail
            </a>
          </div>
        </nav>
        <nav className="flex flex-col items-center w-44 gap-y-3">
          <h6 className="text-[20px] font-black text-white">Contactanos</h6>
          <p className="text-white">
            Por favor contáctenos si tiene alguna idea o solicitud específica.
          </p>
          <p className="text-white">ejemplo@ejemplo.com</p>
        </nav>
      </footer>
      <div className=" text-center text-white bg-secondary pb-2">
        Copyright © nombre. All Rights Reserved
      </div>
    </footer>
  )
}