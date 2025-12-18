import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from '../styles/Header.module.css'
import Search from './Search'

export default function Header() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DJ Events</Link>
      </div>

      <Search></Search>

      <nav>
        <ul>
          {/* <li>
            <Link href="/events">Events</Link>
          </li> */}
          <li>
            <Link href="/events">Events</Link>

            <Link href='/events/add'>
              Add Event
            </Link>
          </li>
              {user ? (
            // If logged in
            <>
              <li>
                <Link href='/events/add'>
                  {/* <a>Add Event</a> */}
                  Add Event
                </Link>
              </li>
              <li>
                <Link href='/account/dashboard'>
                  {/* <a>Dashboard</a> */}
                  Dashboard
                </Link>
              </li>
              <li>
                <button  onClick={() => logout()} className='btn-secondary btn-icon'>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href='/account/login'>
                  <span className='btn-secondary btn-icon'>
                    <FaSignInAlt /> Login
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
