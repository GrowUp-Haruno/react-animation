import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const HoverButton = styled(Button)`
  /* カーソルホバー時の設定 */
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;
