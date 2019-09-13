import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import * as styles from './styles.module.scss';

export function LandingPage() {
  return (
    <Fragment>
      <div className={styles.mainContent}>

        <div className={styles.welcome}>
          <span className={styles.mainHeader}>
            Kanban
          </span>
          <span className={styles.subheader}>
            Sign in to manage your day.
          </span>
        </div>

        <div className={styles.links}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

      </div>
    </Fragment>
  );
}
