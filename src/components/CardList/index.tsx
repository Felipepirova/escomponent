import { Container } from './styles'
import { Card } from '../Card'
import { BallomTip } from '../BallomTip'

const offices = [
  {
    id: 0,
    img: 'https://blog.beerorcoffee.com/wp-content/uploads/2019/10/por-que-voce-deve-pensar-em-um-novo-escritorio-durante-a-pandemia-1080x720.jpg',
    title: 'Seja mais Coworking',
    local: 'Joinville - SC '
  },
  {
    id: 1,
    img: 'https://blog.beerorcoffee.com/wp-content/uploads/2019/10/por-que-voce-deve-pensar-em-um-novo-escritorio-durante-a-pandemia-1080x720.jpg',
    title: 'FazTudo Coworking',
    local: 'Florianópolis - SC'
  }
]

export function CardList() {
  return (
    <Container>
      {offices.map(office => (
        <li key={office.id}>
          <BallomTip text={office.title}>
            <Card office={office}></Card>
          </BallomTip>
        </li>
      ))}
    </Container>
  )
}
