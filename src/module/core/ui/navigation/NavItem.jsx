import { Link, useLocation } from 'react-router-dom'

export default function NavItem({
    // eslint-disable-next-line react/prop-types
    children,
    // eslint-disable-next-line react/prop-types
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