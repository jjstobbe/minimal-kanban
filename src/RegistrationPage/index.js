import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as styles from './styles.module.scss';

export function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const setEmailEvent = (e) => {
    setEmail(e.target.value);
  }
  const setPasswordEvent = (e) => {
    setPassword(e.target.value);
  }
  const setConfirmPasswordEvent = (e) => {
    setConfirmPassword(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setHasError(true);
      setConfirmPassword('');
      return;
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setHasError(false);
  }

  return (
    <div className={styles.mainContent}>
      <form onSubmit={submit}>
        <div className={styles.loginMessage}>
          <label>Create an Account</label>
          <span></span>
        </div>

        <div className={styles.createAccount}>
          <label>
            Already have an account? <Link to="login">Login</Link>
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
        <div className={styles.textInput}>
          <input type="password" placeholder="Confim Password" value={confirmPassword} onChange={setConfirmPasswordEvent} required />
          {hasError ? 
            <div className={styles.inputErrorMessage}>Those passwords didn't match</div> :
            <span></span>}
        </div>
        
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
