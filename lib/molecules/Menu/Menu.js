import React from 'react';
import styled, { css } from 'styled-components';

const StyledMenu = styled.div `
  background-color: #fff;
  width: 100%;
  background-color: #ffffff;
  margin-top: 20px;
  box-sizing: border-box;
  font-family: inherit;
  ${({ sx }) => sx && css(sx)};
`;
const Menu = ({ children, sx, ...rest }) => {
    return (React.createElement(StyledMenu, { sx: sx, ...rest }, children));
};

export { Menu as default };
//# sourceMappingURL=Menu.js.map
