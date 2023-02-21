import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { SubTitle, Title } from '../../../../components/Typography';
import { formatMoney } from '../../../../utils/formatMoney';
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from './styles';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export const CoffeCard = ({ coffee }: CoffeeProps) => {
  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <SubTitle size="s">R$</SubTitle>
          <Title size="m" color="text" as="strong">
            {formattedPrice}
          </Title>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
};
