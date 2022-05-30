import styled from 'styled-components';

export const Button = styled.button`

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 12px 40px;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;

  /* 
    transition
    ## 引数
    1. CSSプロパティ
      - 変化させたいプロパティを指定する
      - すべてを対象にする場合は all を指定する
    2. 変化時間
    3. イージング関数
    4. 遅延時間
  */
  transition: all 0.5s;
`;
