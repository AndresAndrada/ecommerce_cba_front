import { GoBackLink } from '../module/core/ui/GoBackLink'
import { FormRegister } from '../module/auth/components/FormRegister'

export default function Register() {
  return (
    <header
      className={
        'flex flex-col items-center w-screen h-screen overflow-hidden justify-center bg-register bg-no-repeat bg-cover bg-[center_right_-15rem] sm:bg-center'
      }
    >
      <div className="absolute top-6 left-6">
        <GoBackLink />
      </div>
      <FormRegister />
    </header>
  )
}