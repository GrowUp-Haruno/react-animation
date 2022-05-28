import styled from 'styled-components';
import { Button } from '../Atom/Button';

type propTypes = {
  reverseColor?: true;
  shadow?: true;
  offsetShadow?: true;
  offsetShinkShadow?: true;
  letterSpace?: true;
  float?: true;
  shink?: true;
  radius?: true;
};

export const MultifunctionalButton = styled(Button)<propTypes>`
  border-radius: ${({ radius }) => (radius ? '20px' : 'none')};
  &:hover {
    background-color: ${({ reverseColor, theme }) => (reverseColor ? `${theme.colors.black}` : `${theme.colors.white}`)};

    color: ${({ reverseColor, theme }) => (reverseColor ? `${theme.colors.white}` : `${theme.colors.black}`)};

    box-shadow: ${({ shadow, theme }) => (shadow ? `${theme.shadow}` : 'none')};
    box-shadow: ${({ offsetShadow, theme }) => (offsetShadow ? `${theme.offsetShadow}` : 'none')};
    box-shadow: ${({ offsetShinkShadow, theme }) => (offsetShinkShadow ? `${theme.offsetShinkShadow}` : 'none')};

    letter-spacing: ${({ letterSpace, theme }) => (letterSpace ? `${theme.letterSpace}` : 'none')};

    transform: ${({ float }) => (float ? 'translate(-0.1875rem, -0.1875rem)' : 'none')};
    transform: ${({ shink }) => (shink ? 'translate(0.1875rem, 0.1875rem)' : 'none')};
  }
`;
