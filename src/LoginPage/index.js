import React from 'react';
import { Link } from 'react-router-dom'
import * as styles from './styles.module.scss';

export function LoginPage() {
  return (
    <div className={styles.mainContent}>
      <form>
        <div className={styles.loginMessage}>
          <label>Sign in to Kanban</label>
          <span></span>
        </div>

        <div className={styles.createAccount}>
          <label>
            Or <Link to="register">Create Account</Link>
          </label>
        </div>
        
        <div className={styles.textInput}>
          <input type="text" placeholder="Email" />
          <span></span>
        </div>
        <div className={styles.textInput}>
          <input type="text" placeholder="Password" />
          <span></span>
        </div>
        
        <button>
          Sign in
        </button>
      </form>
    </div>
  );
}
