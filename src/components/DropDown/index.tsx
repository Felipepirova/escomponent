import { useState } from 'react'
import { Container } from './style'

interface DropDownProps {
  options: {
    label: string
    value: number
  }[]
}

export function DropDown({ options }: DropDownProps) {
  const [labelSelect, setLabelSelect] = useState('one')

  return (
    <Container>
      <select
        name="drop"
        id="list"
        onChange={e =>
          setLabelSelect(options[Number(e.target.value) - 1].label)
        }
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <h2> Label selecionado {labelSelect} </h2>
    </Container>
  )
}
