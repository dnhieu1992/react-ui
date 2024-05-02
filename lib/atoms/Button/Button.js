import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button ``;
const Button = ({ children, backgroundColor, ...props }) => {
    return (React.createElement(StyledButton, { backgroundColor: backgroundColor, ...props }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
