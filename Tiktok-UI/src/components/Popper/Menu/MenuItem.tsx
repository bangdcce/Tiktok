import { MenuItem } from './MenuItemModel';
import Button from '../../Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

interface MenuItemProps {
    data: MenuItem;
}

const cx = classNames.bind(styles);

function MenuItems({ data }: MenuItemProps) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
