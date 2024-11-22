import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/sale')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className='p-2 prose'>
			<h1>Sale Page</h1>
		</div>
	);
}
