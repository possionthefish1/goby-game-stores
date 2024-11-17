import { Link } from '@tanstack/react-router';

function MainNav() {
	return (
		<div className='p-2 flex gap-2'>
			<Link
				to='/'
				className='[&.active]:font-bold'>
				Home
			</Link>{' '}
			<Link
				to='/about'
				className='[&.active]:font-bold'>
				About
			</Link>{' '}
			<button className='btn btn-primary'>Button</button>
			<button className='btn btn-accent btn-outline'>
				Button
			</button>
		</div>
	);
}

export default MainNav;
