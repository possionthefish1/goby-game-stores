import {
	createLazyFileRoute,
	Link,
} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/users/')({
	component: AdminUsersPage,
});

function AdminUsersPage() {
	return (
		<div className='prose'>
			<h1>All users here.</h1>
			<Link
				to='/admin/users/$userId'
				params={{
					userId: '1',
				}}>
				user 1
			</Link>
			<Link
				to='/admin/users/$userId'
				params={{
					userId: '2',
				}}>
				user 2
			</Link>
			<Link
				to='/admin/users/$userId'
				params={{
					userId: '3',
				}}>
				user 3
			</Link>
		</div>
	);
}
