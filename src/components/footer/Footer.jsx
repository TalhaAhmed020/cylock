import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/logo.png' width={216} height={50} alt='Image Loading Error'/>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <p className={styles.paragraph}>CyLock is a trademark of CyLock SRL
          Registered office Rome, Italy Via Fonte Buono 19
          VAT number 16639311006</p>
          <Link href='/privacy' className={styles.paragraph2}>Privacy & cookie policy - </Link>
          <Link href='/terms' className={styles.paragraph2} >Terms and conditions</Link>
        </div>
        <div className={styles.socialMediaIcons}>
          <Link href='/https://www.linkedin.com/company/cylock/'> <Image src='/linkedIn.png' width={40} height={40} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/people/CyLock/100077297528389/'> <Image src='/facebook.png' width={40} height={40} alt='Image Loading Error'/> </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
