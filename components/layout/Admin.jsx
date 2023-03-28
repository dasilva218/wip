import { BsDoorClosedFill } from 'react-icons/bs';

export default function Layout({ children }) {
  return (
    <main className=' border h-screen  '>
      <header className=' p-3 border border-cyan-400 '>
        <nav className='flex justify-between'>
          <span>Dashboard</span>
          <div>
            <div className='flex items-center gap-2'>
              <span>se deconnecter</span>
              <BsDoorClosedFill />
            </div>
          </div>
        </nav>
      </header>
      <div className='flex'>
        <section>menu</section>
        {children}
      </div>
    </main>
  );
}
