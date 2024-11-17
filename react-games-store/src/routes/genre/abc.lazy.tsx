import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/genre/abc')({
	component: Abc,
});

function Abc() {
	return <div className='p-2'>Hello from Abc!</div>;
}
