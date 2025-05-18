import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const cx = classNames.bind(styles);

type ButtonProps = {
    to?: string;
    href?: string;
    children?: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    Partial<LinkProps>;

function Button({
    to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    leftIcon,
    rightICon,
    children,

    className,
    ...passProps
}: ButtonProps) {
    let Comp: ElementType = 'button';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: Record<string, any> = {
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx(
        'wrapper',
        {
            primary,
            outline,
            rounded,
            small,
            large,
            text,
            disabled,
        },
        className
    );
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightICon && <span className={cx('icon')}>{rightICon}</span>}
        </Comp>
    );
}
export default Button;
