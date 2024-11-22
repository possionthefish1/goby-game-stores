import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

import {
	House,
	Wallet,
	Library,
	Fish,
	User,
	Settings,
} from 'lucide-react';

function MainNav() {
	const linkClassNames = cn(
		'btn btn-primary transition-all [&.active]:font-bold'
	);

	return (
		<nav
			className='p-4 gap-2 navbar bg-neutral *:text-neutral-content'
			role='navigation'>
			{/* Logo */}
			<Link
				to='/'
				className='flex-1 max-w-64 btn btn-ghost'>
				<Fish absoluteStrokeWidth={true} />
				Goby's Game Store
			</Link>{' '}
			{/* Divider */}
			<div className='divider divider-horizontal'></div>
			{/* Home */}
			<Link
				to='/'
				className='btn btn-ghost [&.active]:font-bold'>
				<House absoluteStrokeWidth={true} />
				Home
			</Link>{' '}
			{/* Library */}
			<Link
				to='/library'
				className={cn(linkClassNames, 'btn-ghost')}>
				<Library absoluteStrokeWidth={true} />
				Library
			</Link>{' '}
			{/* Sale | Store */}
			<Link
				to='/sale'
				className='btn btn-ghost [&.active]:font-bold'>
				{/* Sale logo */}
				<svg
					className='text-red-500 size-5'
					xmlns='http://www.w3.org/2000/svg'
					width='1.2rem'
					height='1.2rem'
					viewBox='0 0 24 24'>
					<path
						fill='currentColor'
						d='m18.65 2.85l.61 3.86l3.51 1.79L21 12l1.78 3.5l-3.54 1.79l-.61 3.86l-3.89-.61l-2.77 2.76l-2.78-2.8l-3.86.64l-.62-3.89l-3.49-1.78L3 11.97L1.23 8.5l3.51-1.81l.61-3.83l3.87.64L12 .69l2.77 2.77zM9.5 7A1.5 1.5 0 0 0 8 8.5A1.5 1.5 0 0 0 9.5 10A1.5 1.5 0 0 0 11 8.5A1.5 1.5 0 0 0 9.5 7m5 7a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-6.09 3L17 8.41L15.59 7L7 15.59z'></path>
				</svg>
				Sale
			</Link>{' '}
			{/* Profile */}
			<Link
				to='/user/$userId'
				params={{ userId: '1' }}
				className='btn btn-ghost [&.active]:font-bold'>
				<User absoluteStrokeWidth={true} />
				My Account
			</Link>{' '}
			{/* Wallet */}
			<Link
				to='/wallet'
				className='btn btn-ghost [&.active]:font-bold'>
				<Wallet absoluteStrokeWidth={true} />
				Wallet
			</Link>{' '}
			{/* Settings */}
			<Link
				to='/settings'
				className='btn btn-ghost [&.active]:font-bold'>
				<Settings absoluteStrokeWidth={true} />
				Settings
			</Link>{' '}
		</nav>
	);
}

export default MainNav;
