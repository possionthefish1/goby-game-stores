import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/users/$userId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { userId } = Route.useParams();
	return (
		<div className='prose'>
			<h1>User {userId}</h1>
			<Link to='/admin/users'> Go back </Link>
		</div>
	);
}
