import { FC } from 'react'
import { Wrapper } from './card.styles'

interface Props {
  name: string
}

const Card: FC<Props> = ({ name }) => {
  return <Wrapper>{name}</Wrapper>
}

export default Card
