import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const ShadowButon = styled(Button)`
  &:hover {
    box-shadow: 5px 5px 10px ${(props) => props.theme.shadow};
  }
`;
