import {
  CoffeeList,
  Information,
  InformationContainer,
  InformationItem,
  Menu,
  MenuTitle,
  Paragrath,
  Title,
  TitleContainer,
  InformationList,
  Wrapper,
  MenuHeader,
  FilterTypeLabel,
  FilterTypeInput,
  Filter,
} from './styles'
import { Icon } from '../../components/Icon'
import { Card } from '../../components/Card'
import cupCoffee from '../../assets/images/cup_coffee.png'
import { informationList } from '../../assets/objects/informations'
import { cardList } from '../../assets/objects/cards'

const typeList = ['tradicional', 'especial', 'com leite', 'alcoólico', 'gelado']

export function Home() {
  return (
    <Wrapper>
      <Information>
        <InformationContainer>
          <TitleContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Paragrath>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Paragrath>
          </TitleContainer>
          <InformationList>
            {informationList.map((item) => (
              <InformationItem key={item.text}>
                <Icon {...item} />
              </InformationItem>
            ))}
          </InformationList>
        </InformationContainer>
        <img src={cupCoffee} alt="Copo de café" />
      </Information>

      <Menu>
        <MenuHeader>
          <MenuTitle>Nossos cafés</MenuTitle>
          <Filter>
            {typeList.map((type) => (
              <>
                <FilterTypeInput key={type} type="checkbox" id={type} />
                <FilterTypeLabel htmlFor={type}>{type}</FilterTypeLabel>
              </>
            ))}
          </Filter>
        </MenuHeader>
        <CoffeeList>
          {cardList.map((coffee) => (
            <Card key={coffee.name} {...coffee} />
          ))}
        </CoffeeList>
      </Menu>
    </Wrapper>
  )
}
