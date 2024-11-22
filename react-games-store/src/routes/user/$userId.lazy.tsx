import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/user/$userId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { userId } = Route.useParams();
	return (
		<div className='prose'>
			<h1>{userId!}'s profile</h1>
			<h2>Copy steam later</h2>
		</div>
	);
}
