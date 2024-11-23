import { ReactNode } from '@tanstack/react-router';
import { Star } from 'lucide-react';

function StarRating({ children }: ReactNode) {
	return (
		<div className='flex gap-1 items-center'>
			<Star className='text-yellow-400' />{' '}
			<span className='text-slate-50 font-semibold text-xs'>
				{children}
			</span>
		</div>
	);
}

export default StarRating;
