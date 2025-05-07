import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faRightToBracket,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '../../../Buttons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.module.scss';
import logoUrl from '~/assets/images/logo.svg';
import AccountItems from '../../../AccountItems';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState<number[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logoUrl} alt="Tiktok Logo" role="img" className={cx('logoImg')} />
                </div>

                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text onClick={() => alert('Clicked!')}>
                        Log in
                    </Button>
                    <Button primary onClick={() => alert('Clicked!')}>
                        Register
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
