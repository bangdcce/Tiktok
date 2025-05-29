import { MenuItem } from './MenuItemModel';
import Button from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { MouseEventHandler } from 'react';

interface MenuItemProps<T> {
    data: MenuItem<T>;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const cx = classNames.bind(styles);

function MenuItems<T>({ data, onClick }: MenuItemProps<T>) {
    const classes = cx('menu-item', { separate: data.separate });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
