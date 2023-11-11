import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../layouts/mainLayout'
import PrivateRoute from './components/PrivateRoute'
import RestrictedRoute from './components/RestrictedRoute'
import { routes } from 'constants/routes'

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ component: Component, private: isPrivate, restricted, redirect, path }) => {
          let ChildElement = <Component />

          if (isPrivate) {
            ChildElement = (
              <PrivateRoute redirect={redirect}>
                <Component />
              </PrivateRoute>
            )
          }
          if (restricted) {
            ChildElement = (
              <RestrictedRoute redirect={redirect}>
                <Component />
              </RestrictedRoute>
            )
          }

          return <Route path={path} element={ChildElement} key={path} />
        })}
      </Route>
    </Routes>
  )
}

export default Router
