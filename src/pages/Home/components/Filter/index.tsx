import * as S from './styles'

interface FilterProps {
  type: string
}

export function Filter({ type }: FilterProps) {
  return (
    <>
      <S.FilterTypeInput key={type} type="checkbox" id={type} />
      <S.FilterTypeLabel htmlFor={type}>{type}</S.FilterTypeLabel>
    </>
  )
}
