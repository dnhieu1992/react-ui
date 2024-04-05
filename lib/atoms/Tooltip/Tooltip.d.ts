import React from "react";
import '@cmc/scss/lib/Tooltip.css';
export interface TooltipProps {
    arrow?: boolean;
    children: React.ReactNode;
    className?: string;
    placement?: "top" | "bottom" | "left" | "right";
    title: string;
}
declare const _default: React.MemoExoticComponent<({ arrow, children, className, placement, title, }: TooltipProps) => JSX.Element>;
export default _default;
