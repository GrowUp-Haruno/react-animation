import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const ShadowButon = styled(Button)`
  &:hover {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.black};
  }
`;
