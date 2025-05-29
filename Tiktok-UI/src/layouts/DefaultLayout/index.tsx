import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

type DefaultLayout = {
    children: ReactNode;
};

const cx = classNames.bind(styles);

function DefaultLayout({ children }: DefaultLayout) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
