import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import { AccountResult } from '../Layout/Search/SearchResultModel';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItems({ data }: { data: AccountResult }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('avatar-container')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItems;
