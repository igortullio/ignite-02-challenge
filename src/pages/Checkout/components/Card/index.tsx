import { Trash } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { Count } from '../../../../components/Count'
import {
  Image,
  Information,
  InformationFooter,
  Price,
  PriceContainer,
  Title,
  Wrapper,
} from './styles'

import americano from '../../../../assets/images/americano.png'

export function Card() {
  return (
    <Wrapper>
      <Image src={americano} alt="" />
      <Information>
        <Title>Expresso Tradicional</Title>
        <InformationFooter>
          <Count />
          <Button
            icon={{ icon: <Trash size={16} />, color: 'purple' }}
            label="remover"
            backgroundColor="button"
            hoverColor="hover"
            color="text"
          />
        </InformationFooter>
      </Information>
      <PriceContainer>
        R$ <Price>9,90</Price>
      </PriceContainer>
    </Wrapper>
  )
}
