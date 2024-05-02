import React from 'react';
export type MenuItemProps = {
    children: React.ReactNode;
    sx?: Record<string, any>;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
