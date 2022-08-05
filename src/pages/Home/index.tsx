import { useState } from 'react'
import { Icon } from '../../components/Icon'
import { Card } from '../../components/Card'
import cupCoffee from '../../assets/images/cup_coffee.png'
import { informationList } from '../../assets/objects/informations'
import { cardList } from '../../assets/objects/cards'
import { Filter, FilterType } from './components/Filter'

import * as S from './styles'

const filters: FilterType[] = [
  { name: 'tradicional', check: true },
  { name: 'especial', check: true },
  { name: 'com leite', check: true },
  { name: 'alcoólico', check: true },
  { name: 'gelado', check: true },
]

export function Home() {
  const [filtersCheck, setFiltersCheck] = useState<FilterType[]>(filters)

  const cardsToShow = cardList.filter((card) =>
    card.types.some((type) =>
      filtersCheck
        .filter((filterCheck) => filterCheck.check)
        .map((filterCheck) => filterCheck.name)
        .includes(type),
    ),
  )

  function onChangeAllFilter() {
    setFiltersCheck((state) =>
      state.map((filter) => {
        filter.check = true
        return filter
      }),
    )
  }

  function onChangeFilter(name: string, status: boolean) {
    setFiltersCheck((state) =>
      state.map((filter) => {
        filter.check = filter.name === name
        return filter
      }),
    )
  }

  return (
    <S.Wrapper>
      <S.Information>
        <S.InformationContainer>
          <S.TitleContainer>
            <S.Title>
              Encontre o café perfeito para qualquer hora do dia
            </S.Title>
            <S.Paragrath>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.Paragrath>
          </S.TitleContainer>
          <S.InformationList>
            {informationList.map((item) => (
              <S.InformationItem key={item.text}>
                <Icon {...item} />
              </S.InformationItem>
            ))}
          </S.InformationList>
        </S.InformationContainer>
        <S.InformationImage src={cupCoffee} alt="Copo de café" />
      </S.Information>

      <S.Menu>
        <S.MenuHeader>
          <S.MenuTitle>Nossos cafés</S.MenuTitle>
          <S.FilterContainer>
            {filters.some((filter) => !filter.check) && (
              <Filter
                filter={{ name: 'todos', check: false }}
                onCheck={onChangeAllFilter}
              />
            )}
            {filters.map((filter) => (
              <Filter
                key={filter.name}
                filter={filter}
                onCheck={(status: boolean) =>
                  onChangeFilter(filter.name, status)
                }
              />
            ))}
          </S.FilterContainer>
        </S.MenuHeader>
        <S.CoffeeList>
          {cardsToShow.map((coffee) => (
            <Card key={coffee.name} {...coffee} />
          ))}
        </S.CoffeeList>
      </S.Menu>
    </S.Wrapper>
  )
}
