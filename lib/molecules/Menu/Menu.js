import React from 'react';
import styled, { css } from 'styled-components';

const StyledMenu = styled.div `
  background-color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  width: 100%;
  padding: 8px 16px;
  ${({ sx }) => sx && css(sx)};
`;
const Menu = ({ children, sx, showToggleButton = true, toggleButton, ...rest }) => {
    return (React.createElement(StyledMenu, { sx: sx, ...rest }, children));
};

export { Menu as default };
//# sourceMappingURL=Menu.js.map
