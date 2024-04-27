import React from 'react';
export type MenuItemProps = {
    children: React.ReactNode;
    showToggleButton?: boolean;
    toggleButton?: React.ReactNode;
    sx?: Record<string, any>;
} & React.HTMLAttributes<HTMLDivElement>;
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
