import { Button } from './Atom/Button';
import { Container, VStack } from './Atom/Layout';
import { Theme } from './Atom/Theme';
import { HoverButton } from './Elements/HoverButton';
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
          <HoverButton>HoverButton</HoverButton>
        </VStack>

        <VStack>
          <p>ホバーすると影が表示するボタン</p>
          <ShadowButon>ShadowButon</ShadowButon>
        </VStack>
      </Container>
    </Theme>
  );
}

export default App;
