import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './Pages/Index';
import { Buttons } from './Pages/Buttons';
import { Rects } from './Pages/Rects';
import { Theme } from './Atom/Theme';
import { Container } from './Atom/Layout';

const App = () => {
  return (
    <Theme>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/rects" element={<Rects />} />
            {/* <Route path="/" element={<Index />} />
        <Route path="/record" element={<Record />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </Theme>
  );
};

export default App;
