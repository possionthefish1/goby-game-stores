import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	RouterProvider,
	createRouter,
	NotFoundRoute,
} from '@tanstack/react-router';

import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { Route as rootRoute } from './routes/__root';

// 404 Page
const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: () => (
		<article className='prose'>
			<h1>404 Not Found</h1>
		</article>
	),
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		// Infers the type router and registers it across entire project
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />{' '}
		</StrictMode>
	);
}
