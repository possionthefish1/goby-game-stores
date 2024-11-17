import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

function MainNav() {
	const linkClassNames = cn(
		'btn btn-primary transition-all [&.active]:font-bold'
	);
	return (
		<div className='p-2 flex gap-2 prose'>
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
		</div>
	);
}

export default MainNav;
