import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const GoBackLink = ({ color, label }) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 h-fit mt-4"
        >
            <ChevronLeftIcon
                className={`h-10 text-${color} bg-white bg-opacity-50 hover:bg-slate-50 p-1 rounded-full transition-all hover:shadow-sm`}
            />
            <p className={`text-${color} text-xl font-medium`}>{label}</p>
        </button>
    )
}