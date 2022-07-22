import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../Button'
import { Value, Wrapper } from './styles'

export function Count() {
  const [value, setValue] = useState(0)

  function handleMinusClick() {
    if (value > 0) setValue((state) => state - 1)
  }

  function handlePlusClick() {
    setValue((state) => state + 1)
  }

  return (
    <Wrapper>
      <Button
        variant="secondary"
        fullWidth
        fullHeight
        icon={<Minus size={14} />}
        onClick={handleMinusClick}
      />
      <Value>{value}</Value>
      <Button
        variant="secondary"
        fullWidth
        fullHeight
        icon={<Plus size={14} />}
        onClick={handlePlusClick}
      />
    </Wrapper>
  )
}