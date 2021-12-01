import { Container } from './styles'
import { CardList } from '../../components/CardList'
import { DropDown } from '../../components/DropDown'

const options = [
  {
    label: 'one',
    value: 1
  },
  {
    label: 'two',
    value: 2
  },
  {
    label: 'three',
    value: 3
  }
]

export function Home() {
  return (
    <Container>
      <DropDown options={options} />
      <CardList />
    </Container>
  )
}
