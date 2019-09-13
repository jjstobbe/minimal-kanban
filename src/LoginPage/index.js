import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as styles from './styles.module.scss';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const setEmailEvent = (e) => {
    setEmail(e.target.value);
  }
  const setPasswordEvent = (e) => {
    setPassword(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    setEmail('');
    setPassword('');
    setHasError(true);
  }

  return (
    <div className={styles.mainContent}>
      <form onSubmit={submit}>
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
          <input type="email" placeholder="Email" value={email} onChange={setEmailEvent} required />
          <span></span>
        </div>
        <div className={styles.textInput}>
          <input type="password" placeholder="Password" value={password} onChange={setPasswordEvent} required />
          <span></span>
        </div>

        {hasError && <div className={styles.loginError}>Email or Password is not valid</div>}
        
        <button type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
