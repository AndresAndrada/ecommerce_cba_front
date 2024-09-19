import { GoBackLink } from '../module/core/ui/GoBackLink'
import FormLogin from '../module/auth/components/FormLogin'

const elementoAzar = () => {
    const array = [1, 2, 3, 4]
    const indice = Math.floor(Math.random() * array.length)
    return array[indice]
}

export default function Login() {
    const randomNumber = elementoAzar()
    return (
        <header
            className={`flex flex-col items-center w-screen h-screen overflow-hidden justify-center ${randomNumber === 1
                ? 'bg-[center_right_-30rem] bg-login1'
                : randomNumber === 2
                    ? 'bg-[center_right_-15rem] bg-login2'
                    : randomNumber === 3
                        ? 'bg-[center_right_-55rem] bg-login3'
                        : 'bg-[center_right_-55rem] bg-login4'
                } bg-no-repeat bg-cover bg-[center_right_-10rem] sm:bg-[center_top_.01rem]`}
        >
            <div className="absolute top-6 left-6">
                <GoBackLink color={'color-black'} label={'Back'} />
            </div>
            <FormLogin />
        </header>
    )
}