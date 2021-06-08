import {DetailedHTMLProps, HTMLAttributes, LinkHTMLAttributes, ReactNode} from 'react';

export interface TAGProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'l'
	color: 'primary' | 'ghost' | 'green' | 'red' | 'grey';
	href?: string;
}