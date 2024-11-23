import { useState } from 'react';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';

import {
	Search,
	Sticker,
	Bell,
	MessageCircle,
	MessageCircleMore,
} from 'lucide-react';

function SearchBar() {
	return (
		<article className='flex p-10 justify-between items-center gap-2 col-span-1 border-b-2 border-neutral'>
			<SearchField />
			<Icons gap={'gap-2'} />
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
		<form className='grow max-w-lg'>
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

type IconsProps = {
	gap: string;
};

function Icons({ gap }: IconsProps) {
	return (
		<div className={`flex items-center ${gap}`}>
			<motion.div
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.1 }}>
				{/* <Sticker className='size-6' /> */}
				<div className='avatar cursor-pointer'>
					<div className='size-8'>
						<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
					</div>
				</div>
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
		</div>
	);
}

export default SearchBar;
