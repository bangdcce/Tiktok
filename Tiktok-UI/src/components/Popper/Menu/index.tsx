import { ReactElement, useCallback, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItem';
import { MenuItem } from './MenuItemModel';
import Header from './Header';

interface MenuProps<T> {
    children: ReactElement;
    items: MenuItem<T>[];
    hideOnClick?: boolean;
    onChange: (item: MenuItem<T>) => void;
}

const cx = classNames.bind(styles);

function Menu<T>({ children, items, onChange, hideOnClick = false }: MenuProps<T>) {
    const [history, setHistory] = useState<MenuItem<T>[][]>([items]);

    const current = history[history.length - 1];

    const handleClickItem = useCallback((item: MenuItem<T>) => {
        if (item.subMenu) {
            setHistory((prev) => [...prev, item.subMenu!.data]);
        } else {
            onChange(item);
        }
    }, []);

    const handleBack = useCallback(() => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }, []);

    const handleHide = useCallback(() => {
        setHistory([items]);
    }, [items]);

    const renderItems = () =>
        current.map((item, idx) => (
            <MenuItems key={idx} data={item} onClick={() => handleClickItem(item)} />
        ));

    return (
        <Tippy
            placement="bottom-end"
            offset={[12, 15]}
            interactive
            hideOnClick={hideOnClick}
            onHide={handleHide}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title="Languague" onBack={handleBack} />
                        <div className={cx('menu-scrollable')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
