import MainNav from 'components/MainNav';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
export const Route = createRootRoute({
	component: HomePage,
});

function HomePage() {
	return (
		<>
			{/* <div className='grid grid-cols-12'> */}
			<MainNav />
			<Outlet />
			<TanStackRouterDevtools />
			{/* </div> */}
		</>
	);
}
