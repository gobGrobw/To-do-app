import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Auth from '@/components/Auth';

export default function HomePage() {
	const { userId } = auth();
	if (userId) {
		redirect('/home');
	}

	return <Auth />;
}

