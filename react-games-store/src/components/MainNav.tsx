import {
	Link,
	useMatch,
	useMatchRoute,
} from '@tanstack/react-router';
import { cn } from '@/lib/utils';

function MainNav() {
	const linkClassNames = cn(
		'btn btn-outline transition-all [&.active]:font-bold'
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
				className={linkClassNames}>
				About
			</Link>{' '}
		</div>
	);
}

export default MainNav;
