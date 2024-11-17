import { Link } from '@tanstack/react-router';
import { Link as ChakraLink } from '@chakra-ui/react';

function MainNav() {
	return (
		<div className='p-2 flex gap-2'>
			<ChakraLink
				asChild
				variant={'underline'}>
				<Link
					to='/'
					className='[&.active]:font-bold'>
					Home
				</Link>
			</ChakraLink>{' '}
			<ChakraLink
				asChild
				colorPalette={'orange'}
				variant={'underline'}>
				<Link
					to='/about'
					className='[&.active]:font-bold'>
					About
				</Link>
			</ChakraLink>{' '}
		</div>
	);
}

export default MainNav;
