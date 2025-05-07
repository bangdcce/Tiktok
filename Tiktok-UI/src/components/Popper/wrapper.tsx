import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

type WrapperProps = {
    children: ReactNode;
};

const cx = classNames.bind(styles);

function Wrapper({ children }: WrapperProps) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
