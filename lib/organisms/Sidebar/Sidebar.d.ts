import React from 'react';
export type SidebarProps = {
    showToggleButton?: boolean;
    toggleButton?: React.ReactNode;
    sx?: Record<string, any>;
} & React.HTMLAttributes<HTMLElement>;
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
