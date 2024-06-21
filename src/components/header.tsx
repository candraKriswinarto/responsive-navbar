import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className='sticky top-0 w-full border-b'>
      <div className='h-14 container flex items-center'>
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <h1 className='flex items-center justify-end flex-1'>
          <Link href='/'>some social media icons</Link>
        </h1>
      </div>
    </header>
  );
}
