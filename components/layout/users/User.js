import { BsDoorClosedFill } from 'react-icons/bs';
import { useSession, signOut } from 'next-auth/react';
import { useContext } from 'react';
import { Contexte } from '../../../pages/wipauto/admin/user';

function User({ user, children }) {
  const { data: session } = useSession();

  return (
    <main className=' border h-screen overflow-hidden '>
      <Nav />
      <div className='flex h-full '>
        <aside className='p-2 bg-slate-600 sm:hidden '>
          <ul className='menu bg-base-100 w-56 h-full rounded-box'>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                <span className=' text-sm'>Ajouter en location</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span className=' text-sm'>
                  Ajouter un véhicule en location
                </span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
                Item 3
              </a>
            </li>
          </ul>
        </aside>
        <aside className='h-full pb-10 bg-cyan-700 flex-grow overflow-auto '>
          {children}
        </aside>
      </div>
    </main>
  );
}

export default User;

function Nav() {
  const { partner } = useContext(Contexte);
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>
          Bienvenu {partner.name.toUpperCase()}
        </a>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={partner.logo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              {/* <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a> */}
            </li>

            <li>
              <button
                onClick={() =>
                  signOut({ callbackUrl: '/wipauto/admin' })
                }>
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
