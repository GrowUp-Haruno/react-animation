import styled from 'styled-components';
import { Button } from '../Atom/Button';

export const ThreeDButton = styled(Button)`
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  perspective: 300px;
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top center;
    transform: rotateX(90deg);
    transition: all 0.3s;
    opacity: 0;
  }
  & span {
    display: inline-block;
    transform: translateZ(1px);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    &::before {
      opacity: 1;
      transform: none;
    }
  }
`;
