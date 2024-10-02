/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'

export default function NavItem({
    children,
    route,
}) {
    const location = useLocation()
    return (
        <div>
            <Link
                to={route}
                className={`${location.pathname === route ? 'underline' : 'none'} ${location.pathname === route ? 'text-complementary' : 'text-white'
                    } `}
            >
                {children}
            </Link>
        </div>
    )
}