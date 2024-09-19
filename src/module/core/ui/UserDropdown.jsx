import UserCircle from '../../../assets/svg/userCircle.svg'
// import logout from '../../../assets/svg/logout.svg'
import NavItem from './navigation/NavItem'
import { useNavigate } from 'react-router-dom'
import useLogout from '../../auth/hooks/useLogout'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
// import { getLocalStorage } from '@/modules/auth/utils/getLocalStorage'
import { useUserStore } from '../../../stores'

export default function UserDropdown() {
  const navigate = useNavigate()
  const { Authenticated, User } = useUserStore((state) => state)
  // const localStorage = getLocalStorage('Parse/023/currentUser')
  const { userlogout } = useLogout()
  return (
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button">
        <img src={UserCircle} alt="icon search" className="" />
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content mt-8 z-[100] p-2 shadow bg-secondary rounded-box w-52"
      >
        {Authenticated || User?.objectId ? (
          <>
            <li>
              <NavItem route="/profile">
                <div className="flex gap-3 ">
                  <h3 className=" text-[16px] font-medium text-white">
                    Perfil de usuario
                  </h3>
                  <img
                    src={UserCircle}
                    alt="icon search"
                    className="w-6 h-6 "
                  />
                </div>
              </NavItem>
            </li>
            <li>
              <button type="button" onClick={async () => await userlogout()}>
                <h3 className=" text-[16px] font-medium text-white mr-6">
                  Cerrar Sesion
                </h3>
                {/* <img
                  src={logoutIcon}
                  alt="Cerrar Sesion icon"
                  className="w-[25px] text-white"
                /> */}
                <ArrowLeftStartOnRectangleIcon className="size-6 text-white cursor-pointer" />
              </button>
            </li>{' '}
          </>
        ) : (
          <li>
            <button type="button" onClick={() => navigate('/sign-in')}>
              <h3 className=" text-[16px] font-medium text-white mr-6">
                Iniciar Sesion
              </h3>
              <ArrowLeftEndOnRectangleIcon className="size-6 text-white cursor-pointer" />
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}