import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider.tsx';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<Provider>
				<App />
			</Provider>
		</StrictMode>
	);
}
