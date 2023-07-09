import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        href: "/home"
    },
    {
        id: 2,
        title: "Anti-Hacker Software",
        href: "/antihacker"
    },
    {
        id: 3,
        title: "Our Services",
        href: "/ourServices"
    },
    {
        id: 4,
        title: "Contact",
        href: "/contact"
    },
    {
        id: 5,
        title: "Prices",
        href: "/prices"
    }
];


const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
      <Link href="/" className={styles.logo}> <Image src='/logo.png' width={216} height={60} alt='Image Loading Error'/> </Link>
      <div className={styles.links}>
        {links.map(link=>(
            <Link  key={link.id} href={link.href} className={styles.link}>{link.title}</Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Header
