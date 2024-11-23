import SearchBar from '@/components/SearchBar';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<main className='p-2 col-span-1'>
			<SearchBar />
			<h1>Main store page</h1>
		</main>
	);
}
