import React from 'react';
import styled, { css } from 'styled-components';

const StyledMenuItem = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  & > .menu-item-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px;
  }
  ${({ sx }) => sx && css(sx)};
`;
const MenuItem = ({ children, sx, startIcon, component, endIcon, ...rest }) => {
    return (React.createElement(StyledMenuItem, { sx: sx, ...rest },
        component && component,
        startIcon && startIcon,
        children,
        endIcon && endIcon));
};

export { MenuItem as default };
//# sourceMappingURL=MenuItem.js.map
