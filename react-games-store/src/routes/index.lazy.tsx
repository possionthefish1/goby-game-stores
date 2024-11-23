import SearchBar from 'components/SearchBar';
import StarRating from 'components/StarRating';
import LiveButton from 'components/LiveButton';
import { createLazyFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import heimerdingerMain from '@/assets/heimerdinger_main.jpg';

import { MessageSquareWarning } from 'lucide-react';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className='col-span-1 container mx-auto'>
			<SearchBar />
			<main className='p-8'>
				<div className='grid grid-cols-2 gap-8 w-full auto-rows-fr'>
					{/* Left-side */}
					<div className='prose col-span-1 text-3xl'>
						<h1 className='capitalize text-slate-100 mb-6 text-pretty'>
							legend of the dragons
						</h1>
						<div className='flex items-center gap-8'>
							<h2 className='my-0 text-slate-100'>17 $</h2>
							<div className='flex flex-col *:text-sm py-2'>
								<span>Lorem, ipsum dolor.</span>
								<span>Lorem, ipsum.</span>
							</div>
						</div>
						<p className='text-base text-pretty'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nihil mollitia facilis dolore ullam et
							dolorem in harum ipsam? Eveniet facilis amet id
							delectus fugiat.
						</p>
						<span className='flex gap-2 items-center text-sm'>
							<StarRating>5.0</StarRating>
							<p>
								User rating{' '}
								<span className='text-cyan-300 cursor-pointer'>
									{/* Links to comment later */}
									Overwhelmingly positive
								</span>{' '}
								(278,443)
							</p>
						</span>
						<div className='flex gap-4'>
							<button className='btn btn-primary text-slate-100'>
								Add to Cart
							</button>
							<button className='btn btn-neutral btn-outline'>
								Add to Wishlist
							</button>
						</div>
					</div>

					{/* Right-side */}
					<div className='col-span-1 rounded-t-lg flex-col group'>
						<picture className='overflow-hidden rounded-t-lg'>
							<motion.img
								className='rounded-t-lg object-cover group-hover:saturate-150 transition-all duration-300'
								src={heimerdingerMain}
								// src='https://picsum.photos/700/400'
								alt='game'
							/>
						</picture>
						<div className='bg-neutral rounded-b-lg p-4'>
							<div className='flex gap-4 flex-col'>
								<div className='flex items-center gap-2 text-xs'>
									<span className='text-slate-100 font-bold text-xs'>
										Wild Frames
									</span>
									<StarRating>4.9</StarRating>
									<LiveButton size='xs' />
								</div>
								<div className=''>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Possimus repellat
									perspiciatis quo quasi impedit illo?
								</div>
								<div className='flex items-center gap-6'>
									<div className='div'>
										<div className='avatar-group -space-x-6 rtl:space-x-reverse'>
											<div className='avatar'>
												<div className='w-8'>
													<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
												</div>
											</div>
											<div className='avatar'>
												<div className='w-8'>
													<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
												</div>
											</div>
											<div className='avatar'>
												<div className='w-8'>
													<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
												</div>
											</div>
											{/* <div className='avatar placeholder'>
											<div className='bg-neutral text-neutral-content w-8'>
												<span>+99</span>
											</div>
										</div> */}
										</div>
									</div>
									<span className='text-xs'> And 99 more</span>
									<motion.div
										className='ml-auto'
										whileHover={{ scale: 1.1 }}>
										<MessageSquareWarning
											className='size-6 ml-auto cursor-pointer'
											absoluteStrokeWidth={true}
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
