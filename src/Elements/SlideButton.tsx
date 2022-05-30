import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const SlideButton = styled(Button)`
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s;
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: -1;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    &::before {
      transform: none;
    }
  }
`;
