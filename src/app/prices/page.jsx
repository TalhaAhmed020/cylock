import React from 'react'
import styles from './prage.module.css'
import Link from 'next/link'

const Prices = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose the plan that is right for you</h1>
        <h3 className={styles.title5}>Anti-Hacker Tool: Vulnerability Assessment and Penetration Test</h3>
        <div className={styles.firstDiv}>
            <h5 className={styles.title2}>ONE SHOT</h5>
            <h5 className={styles.title2}>1 VAPT</h5>
            <p className={styles.desc}>1 pentest</p>
            <h1 className={styles.title3}> <span >€</span>396</h1>
            <p className={styles.desc2}>FOR 1 TARGET: URL /IP</p>
        </div>

        <div className={styles.mainDiv}>
            <div className={styles.inner1}> <h5 className={styles.title2}>ONE SHOT</h5>
            <h5 className={styles.title2}>1 VAPT</h5>
            <p className={styles.desc}>1 pentest</p>
            <h1 className={styles.title3}> <span>€</span>396</h1>
            <p className={styles.desc2}>FOR 1 TARGET: URL /IP</p>
            </div>
            <div className={styles.inner2}>
            <h5 className={styles.title2}>ONE SHOT</h5>
            <h5 className={styles.title2}>1 VAPT</h5>
            <p className={styles.desc}>1 pentest</p>
            <h1 className={styles.title3}> <span>€</span>396</h1>
            <p className={styles.desc2}>FOR 1 TARGET: URL /IP</p>
            </div>
        </div>

        <h1 className={styles.title4}>  For a different number of targets and a customized quote, <Link href='/contact' className={styles.span}>contact us</Link>  </h1>
        <h2 className={styles.title6}>The features of CyLock Anti-Hacker</h2>
        <div className={styles.inner3}>
        <ul>
                    <li className={styles.list}>Vulnerability assessment</li>
                    <li className={styles.list}>No impact on operations</li>
                    <li className={styles.list}>CVE/CWE/CSSV unique classification</li>
                    <li className={styles.list}>Schedulable scanning</li>
                    <li className={styles.list}>OWASP framework</li>
                    <li className={styles.list}>Ready-to-use PDF report</li>
                    <li className={styles.list}>Includes remediations and references</li>
                    <li className={styles.list}>OSSTMM and OWASP standards</li>
                    <li className={styles.list}>Report valid for ISO 27001 and 9001</li>
                    <li className={styles.list}>Verified by Certified Penetration Testers</li>
                    <li className={styles.list}>Complete vulnerability report</li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Prices