import { ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItem';
import { MenuItem } from './MenuItemModel';

type MenuProps = {
    children: ReactElement;
    items: MenuItem[];
};

const cx = classNames.bind(styles);

function Menu({ children, items }: MenuProps) {
    const renderItems = (): ReactElement[] =>
        items.map((item, index) => <MenuItems key={index} data={item} />);
    return (
        <Tippy
            placement="bottom-end"
            delay={[0, 800]}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
