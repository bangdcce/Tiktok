import { ReactElement } from 'react';

export interface MenuItem {
    icon: ReactElement;
    title: string;
    to?: string;
}
