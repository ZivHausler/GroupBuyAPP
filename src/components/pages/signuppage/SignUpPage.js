import React from 'react';
import styles from './Signup.module.css'
import LinksAndTerms from './LinksAndTerms/LinksAndTerms';
import SignUpWith from './SignUpWith/SignUpWith'
import SignUpNew from './SignUpNew/SignUpNew'

const SignUpPage = () => {
 

  return (
    <div className={styles.BBC}>
      <div className={styles.mainDiv}>
        {/* <h1>Sign-Up for Tegale</h1>
        <h2>Please fill up the form to sign up</h2> */}
        <SignUpWith />
        {/* <div className={styles.orDiv}>
          <div className={styles.lines}></div>
          <p>or</p>
          <div className={styles.lines}></div>
        </div>
        <SignUpNew />
        <LinksAndTerms /> */}
      </div>
    </div>

  )
}

export default SignUpPage;