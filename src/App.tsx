import { Button } from './Atom/Button';
import { Container, VStack } from './Atom/Layout';
import { Theme } from './Atom/Theme';
import { FloatButton } from './Elements/FloatButton';
import { MultifunctionalButton } from './Elements/MultifunctionalButton';
import { ReverseColorButton } from './Elements/ReverseColorButton';
import { ShadowButon } from './Elements/ShadowButon';

function App() {
  return (
    <Theme>
      <Container>
        <VStack>
          <p>基本のボタン</p>
          <Button>Button</Button>
        </VStack>

        <VStack>
          <p>ホバーすると色が反転するボタン</p>
          <ReverseColorButton>Reverse Color</ReverseColorButton>
        </VStack>

        <VStack>
          <p>ホバーすると影が表示するボタン</p>
          <ShadowButon>Shadow</ShadowButon>
        </VStack>

        <VStack>
          <p>ホバーすると浮き上がる</p>
          <FloatButton>Shadow</FloatButton>
        </VStack>

        <VStack>
          <p>ホバーすると色が反転するボタン(多機能ボタン)</p>
          <MultifunctionalButton reverseColor>Reverse Color</MultifunctionalButton>
        </VStack>
        <VStack>
          <p>ホバーすると影が表示するボタン(多機能ボタン)</p>
          <MultifunctionalButton shadow>Reverse Color</MultifunctionalButton>
        </VStack>
        <VStack>
          <p>ホバーすると色が反転して、影が表示するボタン(多機能ボタン)</p>
          <MultifunctionalButton reverseColor shadow>
            Reverse Color
          </MultifunctionalButton>
        </VStack>
        <VStack>
          <p>ホバーすると色が反転して、行間が開く(多機能ボタン)</p>
          <MultifunctionalButton reverseColor letterSpace>
            Reverse Color
          </MultifunctionalButton>
        </VStack>
        <VStack>
          <p>ホバーすると浮き上がる(多機能ボタン)</p>
          <MultifunctionalButton float offsetShadow>
            Reverse Color
          </MultifunctionalButton>
        </VStack>
        <VStack>
          <p>丸みを帯びたボタンでホバーすると沈み込む(多機能ボタン)</p>
          <MultifunctionalButton radius shink offsetShinkShadow>
            Reverse Color
          </MultifunctionalButton>
        </VStack>
      </Container>
    </Theme>
  );
}

export default App;
