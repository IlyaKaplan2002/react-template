import { AppBar, Container, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <AppBar position='static'>
        <Container>
          <Toolbar></Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}

export default MainLayout
