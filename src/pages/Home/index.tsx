import { Intro } from './components/Intro';
import { OurCoffees } from './components/OurCoffees';
import { HomePageContainer } from './styles';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
      <OurCoffees />
    </HomePageContainer>
  );
};
