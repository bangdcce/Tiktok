import { ReactElement, useCallback, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItem';
import { MenuItem, MenuHistory } from './MenuItemModel';
import Header from './Header';

interface MenuProps<T> {
    children: ReactElement;
    items: MenuItem<T>[];
    hideOnClick?: boolean;
    rootTitle?: string;
    onChange: (item: MenuItem<T>) => void;
}

const cx = classNames.bind(styles);

function Menu<T>({
    children,
    items,
    onChange,
    hideOnClick = false,
    rootTitle = 'Menu',
}: MenuProps<T>) {
    const [history, setHistory] = useState<MenuHistory<T>[]>([{ title: rootTitle, data: items }]);

    const { title: currentTitle, data: currentData } = history[history.length - 1];
    const handleClickItem = useCallback((item: MenuItem<T>) => {
        if (item.subMenu) {
            setHistory((prev) => [
                ...prev,
                { title: item.subMenu!.title, data: item.subMenu!.data },
            ]);
        } else {
            onChange(item);
        }
    }, []);

    const handleBack = useCallback(() => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }, []);

    const handleHide = useCallback(() => {
        // Reset về cấp gốc
        setHistory([{ title: rootTitle, data: items }]);
    }, [items, rootTitle]);

    const renderItems = () =>
        currentData.map((item, idx) => (
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
                        <Header
                            title={currentTitle}
                            onBack={history.length > 1 ? handleBack : undefined}
                        />
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
