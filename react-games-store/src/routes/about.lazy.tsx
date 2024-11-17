import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
	component: About,
});

function About() {
	return (
		<div className='p-2 prose'>
			<h1>Hello from About!</h1>
		</div>
	);
}
