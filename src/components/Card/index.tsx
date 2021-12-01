import { Container } from './styles'

interface CardProps {
  office: {
    img: string
    title: string
    local: string
  }
}

export function Card(props: CardProps) {
  const {
    office: { img, title, local }
  } = props

  return (
    <Container>
      <h2>{title}</h2>
      <img src={img} alt="avatar do usuário" />
      <div>
        <span>{local}</span>
      </div>
    </Container>
  )
}
