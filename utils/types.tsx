export type SideNavItemType = {
    title: string;
    path: string;
    icon?:{
        icon: React.ReactNode;
        fillIcon: React.ReactNode; 
    };
    subMenu?: boolean;
    subMenuItems?: SideNavItemType[];
}

export type MenuItemWithSubMenuProps = {
    item: SideNavItemType;
    toggleOpen: () => void
}

export type SidebarItemType = {
    title: string;
    path: string;
    icon: React.ReactNode;
    active: boolean;
    alert: boolean;
}
