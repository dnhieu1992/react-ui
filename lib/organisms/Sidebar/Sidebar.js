import React, { useState } from 'react';
import ToggleContext from '../../contexts/ToggleContext.js';
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
  height: 100%;
  box-sizing: border-box;
  font-family: inherit;
  color: #000;
  padding: 0 10px;
  box-shadow: 0 3px 13px 0 rgba(18, 43, 70, 0.1);
  transition: width 0.2s;
  width: ${({ toggle }) => (toggle === 'true' ? '68px' : '230px')};
  ${({ sx }) => sx};
`;
const Sidebar = ({ showToggleButton = true, toggleButton, children, sx, ...rest }) => {
    const [toggle, setToggle] = useState(false);
    return (React.createElement(ToggleContext.Provider, { value: toggle },
        React.createElement(StyledSidebar, { toggle: toggle.toString(), sx: sx, ...rest },
            showToggleButton && (React.createElement("div", { onClick: () => setToggle(!toggle) }, toggleButton ? (toggleButton) : (React.createElement(ToggleButton, null,
                React.createElement(BsReverseLayoutSidebarReverse, null))))),
            children)));
};

export { Sidebar as default };
//# sourceMappingURL=Sidebar.js.map
