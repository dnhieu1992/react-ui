import React from 'react';
export type SidebarProps = {
    showToggleButton?: boolean;
    toggleButton: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
