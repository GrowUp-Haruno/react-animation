# まとめ

## CSS

### transition

#### 引数
1. CSSプロパティ
   - 変化させたいプロパティを指定する
   - すべてを対象にする場合は all を指定する
2. 変化時間
3. イージング関数
4. 遅延時間

#### 使用例
```scss
transition: color 0.5s ease 0.5s, background-color 0.5s ease 0.5s;
```

## styled-components

### Themeについて
色や余白などの固定したい要素はthemeとして設定することができます。
他のコンポーネントからthemeを呼び出すには、まず```ThemeProvider```で全体をラップします。

ここでは、Themeコンポーネントに```ThemeProvider```を呼び出して、theme propsにtheme変数を指定することで、
ラップされた```{children}```内のコンポーネントでthemeを使うことができます。

```typescript: Theme.tsx
import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
  },
} as const;

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
```

このコンポーネントをApp.tsxで呼び出します。

```typescript: App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './Atom/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      // children
    </ThemeProvider>
  );
}

export default App;
```

themeの呼び出し動作を確認するため、Buttonコンポーネントを作成します。

```typescript: Button.tsx
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 12px 40px;
  margin: 40px 0;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s;

  /* カーソルホバー時の設定 */
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
```

この中で、`background-color`と`color`に対してthemeをあてるには次のようにします。

```typescript
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  /* 省略 */   
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;
```

呼び出しの基本的な構文は次のとおりです。

```typescript
${(props) => props.theme.color.black }
```

theme以降はThemeコンポーネントで宣言したtheme変数のプロパティ名を指定します。
これでも問題なく動きますが、この時点ではTypeScriptの恩恵である補完が一切働きません。

```typescript
import 'styled-components';

// Themeコンポーネントで宣言したtheme変数を呼び出し
import { theme } from '../Atom/Theme';

// themeの型をtypeofで変換してThemeに代入
type Theme = typeof theme;

// styled-componentsのDefaultThemeにThemeを注入することで、各コンポーネントでコード補完が効くようになります
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
```

VS Codeなどのエディタを使用している場合、コード補完効きます。