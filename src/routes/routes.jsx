import * as React from 'react'
import { lazy } from 'react'
import { Loader } from '../module/core/Loader'
import { Route, useLocation, Routes as RouterRoutes } from 'react-router-dom'
import Navbar from '../module/core/components/Navbar'
import Footer from '../module/core/components/Footer'
// import { useEffect } from 'react'
// import { useUserStore } from '../stores'

const Home = lazy(() => import('../screens/Home'))
const Shop = lazy(() => import('../screens/Shop'))
const Login = lazy(() => import('../screens/Login'))
const Register = lazy(() => import('../screens/Register'))
const CreateProduct = lazy(() => import('../screens/CreateProduct'))
const DetailsProduct = lazy(() => import('../screens/DetailsProduct'))

export default function NavigatorRouter() {
  const location = useLocation();
  // const { User } = useUserStore((state) => state);
  // console.log(User);
  // useEffect(() => {
  //   const localStorageData = localStorage.getItem('Parse/023/currentUser')
  //   let userData = null
  //   if (localStorageData !== null) {
  //     userData = JSON.parse(localStorageData)
  //   }
  //   if (!User && userData !== null) {
  //     setUser(userData)
  //     setAuthenticated(true)
  //   }
  // }, [setUser, User, setAuthenticated])
  return (
    <React.Suspense fallback={
      <div className="h-screen w-full grid place-content-center">
        <Loader className="h-[4rem] w-[4rem]" />
      </div>
    }>
      {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && (
        <>
          <Navbar />
        </>
      )}
      <RouterRoutes>
        <Route>
          <Route path={'/'} element={<Home />} />
          <Route path={'/shop'} element={<Shop />} />
          <Route path={'/sign-in'} element={<Login />} />
          <Route path={'/sign-up'} element={<Register />} />
          <Route path={'/create-product'} element={<CreateProduct />} />
          <Route path={'/details-product'} element={<DetailsProduct />} />
        </Route>
      </RouterRoutes>
      {location.pathname !== '/sign-in' &&
        location.pathname !== '/sign-up' &&
        location.pathname !== '/company-dashboard' &&
        location.pathname !== '/admin-dashboard' && (
          <>
            <Footer />
          </>
        )}
    </React.Suspense>
  )
}
