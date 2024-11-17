import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

function MainNav() {
	const linkClassNames = cn(
		'btn btn-primary transition-all [&.active]:font-bold'
	);
	return (
		<nav className='p-2 flex gap-2 navbar '>
			<Link
				to='/'
				className={linkClassNames}>
				Home
			</Link>{' '}
			<Link
				to='/about'
				className={cn(linkClassNames, 'btn-ghost')}>
				About
			</Link>{' '}
			<Link
				to='/about'
				className={linkClassNames}>
				<span className='loading loading-spinner'></span>
				In progress...
			</Link>{' '}
		</nav>
	);
}

export default MainNav;
