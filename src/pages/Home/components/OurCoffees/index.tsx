import { Title } from '../../../../components/Typography';
import { coffees } from '../../../../data/coffees';
import { CoffeCard } from '../CoffeCard';
import { CoffeeList, OurCoffesContainer } from './styles';

export const OurCoffees = () => {
  return (
    <OurCoffesContainer className="container">
      <Title size="l" color="subtitle">
        Nossos cafés
      </Title>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffesContainer>
  );
};
