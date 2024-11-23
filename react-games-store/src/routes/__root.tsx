import MainNav from 'components/MainNav';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
export const Route = createRootRoute({
	component: HomePage,
});

function HomePage() {
	return (
		<>
			<div className='grid grid-cols-12'>
				<MainNav />
				<section className='col-span-9 grid grid-cols-1'>
					<Outlet />
				</section>
				<TanStackRouterDevtools />
			</div>
		</>
	);
}
