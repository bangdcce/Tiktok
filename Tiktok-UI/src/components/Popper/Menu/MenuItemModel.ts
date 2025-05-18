import { ReactNode } from 'react';
export interface MenuItem<Payload = void> {
    title: string;
    icon?: ReactNode;
    to?: string;
    separate?: boolean;

    /** Nếu là leaf, payload chứa dữ liệu thực tế (LanguageItem, UserItem, …) */
    payload?: Payload;

    /** Nếu là parent, subMenu.data luôn là MenuItem<Payload>[] */
    subMenu?: {
        title: string;
        data: MenuItem<Payload>[];
    };
}
export interface LanguageItem {
    code: string;
}
