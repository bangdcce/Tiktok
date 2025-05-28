import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { AccountResult } from './SearchResultModel';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<AccountResult[]>([]);
    const [showResult, setShowResult] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === ' ' || e.key === 'Tab') && searchValue.length === 0) e.preventDefault();
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        const txt = e.clipboardData.getData('text/plain');
        if (txt.startsWith(' ') || txt.startsWith('   ')) e.preventDefault();
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current?.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItems key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */}
            <div className={cx('search-wrapper')} tabIndex={0}>
                <div className={cx('search')}>
                    <input
                        onPaste={handlePaste}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear-btn')}
                            aria-label="Clear search"
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button
                        className={cx('search-btn')}
                        aria-label="Search"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
