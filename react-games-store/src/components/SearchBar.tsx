import { useState } from 'react';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import {
	Search,
	Sticker,
	Bell,
	MessageCircle,
	MessageCircleMore,
} from 'lucide-react';

function SearchBar() {
	return (
		<article className='flex items-center gap-2 col-span-1'>
			<SearchField />
			<motion.div
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				<Sticker className='size-6' />
			</motion.div>

			<motion.div
				className='indicator'
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				<span className='indicator-item badge badge-primary indicator-item-small' />
				<Bell className='size-6' />
			</motion.div>

			<motion.div
				className='indicator'
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				<MessageCircle className='size-6' />
			</motion.div>

			{/* Loading
      <motion.div
				className='indicator'
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				<span
					className={cn(
						'indicator-item badge badge-primary',
						smallIndicator
					)}>
					<span className='loading loading-dots loading-xs' />
				</span>
				<MessageCircle className='size-6' />
			</motion.div> */}

			{/* Unread
      <motion.div
				className='indicator'
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				<span className='indicator-item badge badge-primary scale-50 right-1 top-1' />
				<MessageCircleMore className='size-6' />
			</motion.div> */}
		</article>
	);
}

function SearchField() {
	const [searchTerm, setSearchTerm] = useState('');

	function handleChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setSearchTerm(event.target.value);
	}

	return (
		<form className='grow'>
			<label className='input flex items-center gap-2'>
				<Search />
				<input
					type='text'
					placeholder='Search...'
					className='grow'
					value={searchTerm}
					onChange={handleChange}
				/>
				{/* If IOS (Safari)
          <kbd className='kbd kbd-sm'>⌘</kbd> 
        */}
				<kbd className='kbd kbd-sm'>Ctrl</kbd>
				<kbd className='kbd kbd-sm'>K</kbd>
			</label>
		</form>
	);
}

export default SearchBar;
