import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: #f5f5f5;
`;
const Button = ({ children, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return React.createElement(StyledButton, { onClick: handleClick }, children);
};
var Button$1 = React.memo(Button);

export { Button$1 as default };
//# sourceMappingURL=Button.js.map
