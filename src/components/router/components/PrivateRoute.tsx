import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { authSelector } from 'store/auth'
import { useAppSelector } from 'store/hooks'

interface Props {
  children: ReactNode
  redirect: string
}

const PrivateRoute: FC<Props> = ({ children, redirect }) => {
  const isLoggedIn = useAppSelector(authSelector.getIsLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={redirect} />
  }

  return <>{children}</>
}

export default PrivateRoute
