import React from 'react';
export type MenuProps = {
    children: React.ReactNode;
    sx?: Record<string, any>;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
