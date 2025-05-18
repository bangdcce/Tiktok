import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faRightFromBracket,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '../../../Buttons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.module.scss';
import logoUrl from '~/assets/images/logo.svg';
import AccountItems from '../../../AccountItems';
import Menu from '../../../Popper/Menu';
import { LanguageItem, MenuItem } from '../../../Popper/Menu/MenuItemModel';
import { MessageIcon, NotificationsIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Images';

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
    const [searchResult, setSearchResult] = useState<number[]>([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem: RootMenuItem): void => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logoUrl} alt="Tiktok Logo" role="img" className={cx('logoImg')} />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear-btn')} aria-label="Clear search">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')} aria-label="Search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notifications" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <NotificationsIcon />
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
                            <HeadlessTippy
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
                                        <PopperWrapper>
                                            <h4 className={cx('search-title')}>Accounts</h4>
                                            <AccountItems />
                                            <AccountItems />
                                            <AccountItems />
                                            <AccountItems />
                                        </PopperWrapper>
                                    </div>
                                )}
                            ></HeadlessTippy>
                        </>
                    )}
                    <Menu items={currentUser ? User_Menu : Menu_Items} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen van 8"
                                src="https://i.pinimg.com/736x/3d/26/88/3d2688cb9f25e45396f1901fe632cb63.jpg"
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
