import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/wallet')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className='p-2 prose'>
			<h1>Wallet Page</h1>
		</div>
	);
}
