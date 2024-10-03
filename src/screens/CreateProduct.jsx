import { GoBackLink } from '../module/core/ui/GoBackLink'
import { FormCreateProduct } from '../module/create-product/components/FormCreateProduct'

export default function Register() {
    return (
        <header
            className={
                'relative top-[var(--navbar-height)] flex flex-col items-center w-screen h-screen overflow-hidden justify-center bg-register bg-no-repeat bg-cover bg-[center_right_-15rem] sm:bg-center'
            }
        >
            <div className="absolute top-6 left-6">
                <GoBackLink />
            </div>
            <FormCreateProduct />
        </header>
    )
}     