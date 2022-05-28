import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const ShadowButon = styled(Button)`
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;
