import { VStack } from '../Atom/Layout';
import { SlideButton } from '../Elements/SlideButton';
import { ThreeDButton } from '../Elements/ThreeDButton';

export const Index = () => {
  return (
    <>
      <VStack>
        <p>スライドボタン</p>
        <SlideButton>Sliede Button</SlideButton>
      </VStack>
      <VStack>
        <p>3Dボタン</p>
        <ThreeDButton>
          <span>ThreeD Button</span>
        </ThreeDButton>
      </VStack>
    </>
  );
};
