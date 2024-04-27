import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import ToggleContext from '../../contexts/ToggleContext.js';

const StyledMenuItem = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-family: 'inherit';
  font-weight: 400;
  text-transform: capitalize;
  box-sizing: border-box;

  &:hover {
    background-color: #e1e1e1;
  }
  ${({ sx }) => sx && css(sx)};
`;
const MenuItem = ({ children, sx, startIcon, component, endIcon, ...rest }) => {
    const toggle = useContext(ToggleContext) || false;
    return (React.createElement(StyledMenuItem, { sx: sx, ...rest },
        !toggle && component && component,
        startIcon && startIcon,
        !toggle && children,
        !toggle && endIcon && endIcon));
};

export { MenuItem as default };
//# sourceMappingURL=MenuItem.js.map
