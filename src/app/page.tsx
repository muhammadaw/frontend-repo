'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Home() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.userData);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      router.push('/main');
    }
  }, [user, router]);

  return null;
}