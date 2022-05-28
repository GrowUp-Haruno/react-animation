import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const FloatButton = styled(Button)`
  &:hover {
    transform: translate(-0.1875rem, -0.1875rem);
    box-shadow: ${({ theme }) => `${theme.offsetShadow}`};
  }
`;
