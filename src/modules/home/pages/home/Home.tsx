import { Button, Container } from '@mui/material'
import { useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { CardsWrapper } from './home.styles'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { homeActions, homeSelector } from 'store/home'
import { Card } from 'modules/home/components/card'
import { authActions } from 'store/auth'

const Home = () => {
  const dispatch = useAppDispatch()

  const cards = useAppSelector(homeSelector.getCards)

  const addCard = useCallback(() => {
    dispatch(homeActions.add({ name: uuid() }))
  }, [dispatch])

  const logout = useCallback(() => {
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <Container>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={addCard}>Add card</Button>

      <CardsWrapper>
        {cards.map((item) => (
          <Card name={item.name} key={item.name} />
        ))}
      </CardsWrapper>
    </Container>
  )
}

export default Home
