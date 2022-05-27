import 'styled-components';

// Themeコンポーネントで設定した型をDefaultThemeに注入することで、各コンポーネントに対してthemeを呼び出せるようになる
import { theme } from '../Atom/Theme';

type Theme = typeof theme;


declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
