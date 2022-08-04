import { Icon } from '../../components/Icon'
import { Card } from '../../components/Card'
import cupCoffee from '../../assets/images/cup_coffee.png'
import { informationList } from '../../assets/objects/informations'
import { cardList } from '../../assets/objects/cards'
import { Filter } from './components/Filter'

import * as S from './styles'

const typeList = ['tradicional', 'especial', 'com leite', 'alcoólico', 'gelado']

export function Home() {
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
            {typeList.map((type) => (
              <Filter key={type} type={type} />
            ))}
          </S.FilterContainer>
        </S.MenuHeader>
        <S.CoffeeList>
          {cardList.map((coffee) => (
            <Card key={coffee.name} {...coffee} />
          ))}
        </S.CoffeeList>
      </S.Menu>
    </S.Wrapper>
  )
}
