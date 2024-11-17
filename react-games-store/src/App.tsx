import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from '@/components/ui/button';
import { HStack } from '@chakra-ui/react';

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<div>
				<HStack>
					<Button>Click me</Button>
					<Button>Click me</Button>
				</HStack>
				<a
					href='https://vite.dev'
					target='_blank'
					rel='noreferrer'>
					<picture>
						<img
							src={viteLogo}
							className='logo'
							alt='Vite logo'
						/>
					</picture>
				</a>
				<a
					href='https://react.dev'
					target='_blank'
					rel='noreferrer'>
					<picture>
						<img
							src={reactLogo}
							className='logo react'
							alt='React logo'
						/>
					</picture>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button
					type='button'
					onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
