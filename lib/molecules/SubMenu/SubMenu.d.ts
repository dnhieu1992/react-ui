import React from 'react';
export type SubMenuProps = {
    children: React.ReactNode;
    title: string;
    icon: React.ReactNode | JSX.Element;
    sx?: Record<string, any>;
} & React.HTMLAttributes<HTMLDivElement>;
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
