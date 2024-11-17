import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/genre/')({
	component: RouteComponent,
});

function RouteComponent() {
	return 'Hello /genre/!';
}
