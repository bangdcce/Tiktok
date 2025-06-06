import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Buttons';

import styles from './Header.module.scss';
import logoUrl from '~/assets/images/logo.svg';
import avatarSrc from '~/assets/images/avatar.jpg';

import Menu from '~/components/Popper/Menu';
import { LanguageItem, MenuItem } from '~/components/Popper/Menu/MenuItemModel';
import { MessageIcon, InboxIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/layouts/components/Search';
import config from '~/configs';

const cx = classNames.bind(styles);

type RootMenuItem = MenuItem<LanguageItem>;

const Menu_Items: RootMenuItem[] = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        subMenu: {
            title: 'Languague',
            data: [
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
                { title: 'English', payload: { code: 'en' } },
                { title: 'VietNam', payload: { code: 'vi' } },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

const User_Menu: RootMenuItem[] = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/userInfo',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/getCoins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },

    ...Menu_Items,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem: RootMenuItem): void => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={logoUrl} alt="Tiktok Logo" role="img" className={cx('logoImg')} />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notifications" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text onClick={() => alert('Clicked!')}>
                                Upload
                            </Button>
                            <Button primary onClick={() => alert('Clicked!')}>
                                Register
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? User_Menu : Menu_Items} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen van 8"
                                src={avatarSrc}
                                fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRojMWT2URETKHaKbXdkuYcbC3xFXu7Eqq1A&s"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
