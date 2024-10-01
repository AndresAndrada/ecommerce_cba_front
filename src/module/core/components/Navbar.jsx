import LOGO from '../../../assets/react.svg'
import shoppingCart from '../../../assets/svg/shoppingCart.svg'
import logoutIcon from '../../../assets/svg/logout.svg'
import loginIcon from '../../../assets/svg/login.svg'
import menuIcon from '../../../assets/svg/menu.svg'
import NavItem from '../ui/navigation/NavItem'
// import NotificationDropdown from '../ui/dropdown/notificationDropdown'
import UserDropdown from '../ui/UserDropdown'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../stores'
import useLogout from '../../auth/hooks/useLogout';
// import { useEffect } from 'react'
// import { getLocalStorage } from '@/modules/auth/utils/getLocalStorage'

export default function Navbar() {
  const { Authenticated } = useUserStore();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const handlerSision = () => {
    Authenticated
      ? navigate('/sign-in')
      : logout()
  }


  // const { itemsInCart, setItemsInCart } =
  //   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  //   useBoundStore((state) => state)

  // // biome-ignore lint/correctness/useExhaustiveDependencies: <suppressions/parse>
  // useEffect(() => {
  //   const itemsStorage = getLocalStorage('shoppingCard')

  //   if (itemsStorage) {
  //     setItemsInCart(itemsStorage.length)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div>
      <div className="navbar bg-primary fixed z-50">
        <div className="navbar-start">
          <Link
            to={'/'}
            className="btn btn-ghost text-xl w-24 sm:w-auto "
          >
            <img alt="Logo" src={LOGO} className="w-15" />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavItem route={'/'}>
                <h3 className=" text-[20px] font-medium">Home</h3>
              </NavItem>
            </li>
            <li>
              <NavItem route="/shop">
                <h3 className=" text-[20px] font-medium">Tienda</h3>
              </NavItem>
            </li>
            <li>
              <NavItem route={'/product'}>
                <h3 className=" text-[20px] font-medium">Recetas</h3>
              </NavItem>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex gap-2 sm:mr-3">
            <NavItem route="/shopping-cart">
              <div className="relative text-white">
                <img src={shoppingCart} alt="icon search" className="w-6 h-6" />
                {/* <span
                  className='flex absolute -top-3 -right-2 text-xs rounded-full bg-red-600 min-w-4 h-4 items-center justify-center px-1'
                >
                  {itemsInCart}
                </span> */}
              </div>
            </NavItem>
            {/* <NotificationDropdown /> */}
            <UserDropdown />
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={-1}
              role="button"
              className="btn btn-ghost md:hidden"
            >
              <img src={menuIcon} alt="Menu icon" className="w-6 h-6" />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-primary rounded-box w-52"
            >
              <li>
                <NavItem route="/">
                  <h3 className=" text-[16px] font-medium">Home</h3>
                </NavItem>
              </li>
              <li>
                <NavItem route="/store">
                  <h3 className=" text-[16px] font-medium">Tienda</h3>
                </NavItem>
              </li>
              <li>
                <NavItem route="/recipes">
                  <h3 className=" text-[16px] font-medium">Recetas</h3>
                </NavItem>
              </li>
              <li>
                <button type="button" className="flex justify-between items-center w-full" onClick={handlerSision}>
                  <h3 className="text-[16px] font-medium text-white">
                    {Authenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                  </h3>
                  <img
                    src={Authenticated ? loginIcon : logoutIcon}
                    alt={Authenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                    className="w-[25px] text-white"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[64px]" />
    </div>
  )
}