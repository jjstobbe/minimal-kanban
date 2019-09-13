import React from 'react';
import { Link } from 'react-router-dom'
import * as styles from './styles.module.scss';

export function NavBar() {
  console.log(styles);

  return (
    <nav className={styles.navBar}>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </nav>
  );
}
