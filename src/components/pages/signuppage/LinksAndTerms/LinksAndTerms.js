import React from "react";
import styles from "./LinksAndTerms.module.css"

const LinksAndTerms = () => {
    return(
    <div className={styles.bottominfo}>
        <p>Already a memeber? <a href="#">Sign In</a></p>
        <div className={styles.line}></div>
        <p>By signing up you agree to ״Tegale״ Terms of Service and Privacy Policy. This page is protected by reCAPTCHA and is subject to Google's Terms of Service and Privacy Policy.</p>
    </div>
    );
}

export default LinksAndTerms;