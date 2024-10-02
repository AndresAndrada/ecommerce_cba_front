import LOGO from '../../../assets/svg/negativo.svg'
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <footer className="footer p-10 bg-primary text-base-content justify-around text-center">
        <aside>
          <img src={LOGO} alt="Logo" className="w-48" />
        </aside>
        <nav className="flex flex-col items-center">
          <h6 className="text-[20px] font-black text-secondary text-center">
            Sobre nosotros
          </h6>
          <p className=" w-44 text-secondary">
            {' '}
            Lorem ipsum dolor sit amet consectetur. .
          </p>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-[20px] font-black text-secondary">
            Mantente Contectado
          </h6>
          <div className="grid gap-4 mt-2">
            <a
              href="https://www.instagram.com/grupomate.ar/?hl=es-la"
              className="flex gap-3 text-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill className="text-2xl" /> Instagram
            </a>
            <a
              href="https://twitter.com/?lang=en"
              className="flex gap-3 text-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="text-2xl" /> X
            </a>
            <a
              href="/"
              className="flex gap-3 text-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail className="text-2xl" /> Gmail
            </a>
          </div>
        </nav>
        <nav className="flex flex-col items-center w-44 gap-y-3">
          <h6 className="text-[20px] font-black text-secondary">Contactanos</h6>
          <p className="text-secondary">
            Por favor contáctenos si tiene alguna idea o solicitud específica.
          </p>
          <p className="text-secondary">ejemplo@ejemplo.com</p>
        </nav>
      </footer>
      <div className=" text-center text-secondary bg-primary pb-2">
        Copyright © nombre. All Rights Reserved
      </div>
    </footer>
  )
}