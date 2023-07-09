'use client'
import React from 'react'
import styles from './page.module.css'
import NextNProgress from 'nextjs-progressbar';
import Image from 'next/image';

const AntiHacker = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>Antivirus and antihacker software for business cyber security and OWASP TOP 10 vulnerabilities</h1>
        <h2 className={styles.title2}>Find and overcome any vulnerability</h2>

      <div className={styles.container2}>
        <div className={styles.imageContainer}>
            <Image alt='' src='/antihackerPage.png' fill={true}/>
        </div>
        <div className={styles.desc}>
            <p className={styles.p}>CyLock finds vulnerabilities in any system with no need for technical skills, executes accurate Penetration Tests and Vulnerability Assessments in only 24 hours</p>
            <p className={styles.p}>9 websites out of 10 suffer from vulnerabilities that can be exploited to steal data, CyLock immediately finds them and shows you how to overcome them</p>
            <p className={styles.p}>CyLock simplifies the automatic finding of critical vulnerabilities in websites, web applications and servers, including those defined by OWASP TOP 10. </p>
            <p className={styles.p}>CyLock identifies all vulnerabilities and configuration errors, providing an accurate and ready-to-use report, with no false positives</p>
        </div>
      </div>

      <div className={styles.container3}>
        <h2>Protect your company with online heartbleed tests and pentests on your website</h2>
        <p className={styles.paragraph}>SME owners often think that hackers won’t find their business profitable enough to attack them. Truth is that small enterprises are the easiest to attack as they adopt less defence  or security checks. Their reward could actually be lower, but the work to obtain it is a lot less and can be easily replicated on a larger scale. Your moment to act is NOW.</p>
        <button className={styles.button}>Request a free test</button>
        <p className={styles.paragraph2}>CyLock’s  Anti-Hacker services CyLock was created with the aim of increasing the security level of corporate IT systems, to adequately resist external attacks. It is ideal to implement IT security in the company even by non-specialised staff: entrepreneurs, professionals, managers and non-technical personnel: CyLock’s report and dashboard are designed to be easily understood even by non-IT and cybersecurity experts.</p>
        <h2 className={styles.title}>OSSTMM and OWASP in a single anti-hacker software</h2>
        <p className={styles.paragraph}>CyLock allows you to test and manage  cybersecurity in your business entirely automatically, online, 24/7, to make decisions and to adopt remediation measures to vulnerabilities with full awareness and no need for tech experts.</p>
        <p className={styles.paragraph}>Today a sharp information asymmetry exists between experts and non-experts in cybersecurity, but specialists are a scarce resource on the market, missing in almost all SMEs. The information bias persists even after the intervention of specialised technicians, due to their ultra-specialised reports and proposed remedies: their acceptance and implementation often occur in almost complete unawareness by the organisation, which can only undergo  them.</p>
        <p className={styles.paragraph}>Today a sharp information asymmetry exists between experts and non-experts in cybersecurity, but specialists are a scarce resource on the market, missing in almost all SMEs. The information bias persists even after the intervention of specialised technicians, due to their ultra-specialised reports and proposed remedies: their acceptance and implementation often occur in almost complete unawareness by the organisation, which can only undergo  them.</p>
        <p className={styles.paragraph}>Today a sharp information asymmetry exists between experts and non-experts in cybersecurity, but specialists are a scarce resource on the market, missing in almost all SMEs. The information bias persists even after the intervention of specialised technicians, due to their ultra-specialised reports and proposed remedies: their acceptance and implementation often occur in almost complete unawareness by the organisation, which can only undergo  them.</p>
      </div>

      </div>
      <div className={styles.container4}>
        <div className={styles.innerContainer}>

        <h2>The value of a simple-to-use pentest audit</h2>
        <p className={styles.paragraph}>CyLock’s Anti-Hacker  is a software developed by our researchers to allow users to analyse business security from an hacker’s point of view and propose the most effective remediation measures to avoid external attacks.</p>
        <p className={styles.paragraph}> CyLock’s anti-hacker activity involves the use of a proprietary software, developed by our team, that simultaneously performs multiple VAPTs (Vulnerability Assessment and Penetration Tests) based on the OWASP and OSSTMM global cyber security methodologies and standards, allowing the typical activity of an ethical hacker to be performed in less time.</p>
        </div>
      </div>

      <div className={styles.container5}>
        <h2>Penetration test e cyber vulnerability assessment: what they and how they work</h2>
        <p className={styles.paragraph}>Vulnerability assessment is not to be taken for granted, as it is not a simple test but rather a set of activities to scan the network for vulnerabilities. Cyber vulnerability assessment, indeed, makes you aware of your system’s vulnerability in advance and thus helps you preventing possible attacks on the business network with an anti-hacker defence designed specifically to protect it. Cyber vulnerability, therefore, refers to any vulnerability of IT systems’ codes; through vulnerability scans is possible to check whether implementation bugs, design flaws or application weaknesses exist that could allow malicious attackers to steal data and take control of the business network. In short, vulnerability assessment actually scans the system or network for any weaknesses that could provide hackers with a backdoor. Vulnerability assessments are often combined with penetration tests, whose aim is to analyse the network’s security to (harmlessly) exploit vulnerabilities and understand how hackers can attack, preventing in this way phishing campaigns or other types oh hacker attacks. In other words: penetration testing simulates an actual hacker attack to identify flaws that could allow unwanted access to the system.</p>
      </div>
      
    </div>
  )
}

export default AntiHacker
