import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const COntact = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in touch with the CyLock Team</h1>
        <h4 className={styles.title2}>For more information, request a demo or discover the advantages of being a partner fill out this form</h4>
        <div className={styles.formDiv}>
            <form action="post">
                <div className={styles.form1}>
                <input className={styles.input1} required type="text" placeholder='First name' name="" id="" />
                <input className={styles.input1} required type="text" placeholder='Surname' name="" id="" />
                </div>
                <div className={styles.form2}>
                <input required className={styles.input2} type="text" placeholder='Enter your email' name="" id="" />
                <br />
                <textarea required className={styles.input3} cols={70} rows={3} placeholder='Write here the reason for information request'/>                
                <br />
                <input required type="checkbox" name="" id="" />
                <label htmlFor=""> Read and understand terms of service</label>
                <br />
                <br />
                <Link className={styles.link} href='/terms'>Read T&C</Link>
                <Link className={styles.link} href='/privacy'>Read the privacy policy</Link>  
                <br />
                <br />
                <button className={styles.button}>Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default COntact
