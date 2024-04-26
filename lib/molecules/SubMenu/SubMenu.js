import React from 'react';
import styled, { css } from 'styled-components';

const StyledSubMenu = styled.div `
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  ${({ sx }) => sx && css(sx)};
`;
const StyledSubMenuTitle = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  & > .sub-menu-title {
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
  }
`;
const SubMenu = ({ title, icon, children, sx, ...rest }) => {
    return (React.createElement(StyledSubMenu, { sx: sx, ...rest },
        React.createElement(StyledSubMenuTitle, null,
            icon && icon,
            React.createElement("span", { className: "sub-menu-title" }, title)),
        children));
};

export { SubMenu as default };
//# sourceMappingURL=SubMenu.js.map
