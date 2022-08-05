import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type FilterType = {
  name: string
  check: boolean
}

interface FilterProps extends InputHTMLAttributes<HTMLInputElement> {
  filter: FilterType
  onCheck: (status: boolean) => void
}

export function Filter({ filter, onCheck, ...props }: FilterProps) {
  const [checked, setChecked] = useState(filter.check)

  function onChange() {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <>
      <S.FilterTypeInput
        type="checkbox"
        id={filter.name}
        checked={filter.check}
        onChange={onChange}
        {...props}
      />
      <S.FilterTypeLabel htmlFor={filter.name}>{filter.name}</S.FilterTypeLabel>
    </>
  )
}
