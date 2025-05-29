import { ReactNode } from 'react';

type MenuProps = {
    children: ReactNode;
};

function Menu({ children }: MenuProps) {
    return <nav>{children}</nav>;
}

export default Menu;
