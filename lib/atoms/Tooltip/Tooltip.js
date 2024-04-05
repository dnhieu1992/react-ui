import React from 'react';
import classNames from 'classnames';
import '@cmc/scss/lib/Tooltip.css';

const Tooltip = ({ arrow = true, children, className, placement = "bottom", title, }) => {
    return (React.createElement("div", { className: classNames("tooltip", { className: !!className }) },
        children,
        React.createElement("div", { className: classNames(`tooltip-text tooltip-text__placement--${placement}`, {
                "tooltip-text__placement--arrow": arrow && (placement === "bottom" || placement === "top")
            }) }, title)));
};
var Tooltip$1 = React.memo(Tooltip);

export { Tooltip$1 as default };
//# sourceMappingURL=Tooltip.js.map
