import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('avatar-container')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/60f3c53525bbbe0141843a983437fb52~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=436e7b0c&x-expires=1746687600&x-signature=yY1n6w4YR191IoRNd96nm%2BqGEHM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=b59d6b55&idc=sg1"
                    alt="Nam"
                />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItems;
