import styled from 'styled-components';

interface TitleProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  color?: 'title' | 'subtitle' | 'text';
  weight?: string | number;
}

interface TextProps {
  size?: 'l' | 'm' | 's';
  color?: 'text' | 'subtitle' | 'label';
  weight?: string | number;
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`;

export const SubTitle = styled.p<TextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size ?? 'm'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`;
