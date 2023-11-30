import { Button, Container } from '@mui/material'
import { useCallback } from 'react'
import { authActions } from 'store/auth'
import { useAppDispatch } from 'store/hooks'

const Login = () => {
  const dispatch = useAppDispatch()

  const login = useCallback(() => {
    dispatch(authActions.login())
  }, [dispatch])

  return (
    <Container>
      <Button onClick={login}>Login</Button>

      <p className='hover:bg-orange-700'>test</p>
    </Container>
  )
}

export default Login
