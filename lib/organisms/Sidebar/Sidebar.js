import React from 'react';
import styled from 'styled-components';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';

const ToggleButton = styled.div `
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const StyledSidebar = styled.aside `
  background-color: #fff;
  height: 100vh;
  ${({ sx }) => sx}
`;
const Sidebar = ({ showToggleButton, toggleButton, children, sx, ...rest }) => {
    return (React.createElement(StyledSidebar, { sx: sx, ...rest },
        showToggleButton && (React.createElement("div", null, toggleButton ? (toggleButton) : (React.createElement(ToggleButton, null,
            React.createElement(BsReverseLayoutSidebarReverse, null))))),
        children));
};

export { Sidebar as default };
//# sourceMappingURL=Sidebar.js.map
