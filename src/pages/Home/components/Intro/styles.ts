import styled from 'styled-components';
import introBgImg from '../../../../assets/intro-background.png';
import { Title } from '../../../../components/Typography';

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${introBgImg}) no-repeat center;
  background-size: cover;
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(Title)`
  margin-bottom: 1rem;
`;
export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
