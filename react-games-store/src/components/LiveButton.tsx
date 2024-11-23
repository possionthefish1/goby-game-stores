import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
	size?: 'xs' | 'sm' | 'lg';
};

function LiveButton(props: Props) {
	const sizeClass = `btn-${props.size}`;

	return (
		<div
			className={cn(
				'btn text-white bg-red-600 hover:bg-red-700',
				sizeClass
			)}>
			Live
			<Play absoluteStrokeWidth={true} />
		</div>
	);

	{
		/* <div className='btn text-white bg-red-600 hover:bg-red-700'>
				Live
				<Play absoluteStrokeWidth={true} />
			</div> */
	}
}

export default LiveButton;
