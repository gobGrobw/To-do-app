import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
	title: 'To-do App',
	description: 'Organize your task',
	icons: {
		icon: './vercel.svg',
	},
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}

