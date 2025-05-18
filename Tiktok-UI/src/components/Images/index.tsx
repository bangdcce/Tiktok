import { ImgHTMLAttributes, forwardRef, useState } from 'react';
import images from '../../assets/images';
import styles from './Images.module.scss';
import classNames from 'classnames';

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
    src: string;
    alt: string;
    /** Đường dẫn ảnh thay thế khi load lỗi */
    fallbackSrc?: string;
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, className, fallbackSrc = images.noImage, ...rest }, ref) => {
        const [fallBack, setFallBack] = useState('');

        const handleFallBack = () => {
            setFallBack(fallbackSrc);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                alt={alt}
                {...rest}
                onError={handleFallBack}
            />
        );
    }
);
export default Image;
