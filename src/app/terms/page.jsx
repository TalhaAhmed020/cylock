import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Terms = () => {
  return (
    <div>
      <div className={styles.container}>
        <h3>CYLOCK</h3>
        <h3>TERMS & CONDITIONS </h3>
        <h4>BINDING IN THE USE OF THE SERVICES OF THIS SITE AND THOSE CONNECTED TO IT</h4>
        <h4>Introduction and purpose of the service</h4>
        <p className={styles.desc}>This website and the services connected to it and provided through it are the exclusive property and are provided by CyLock Srl, with registered office in Via Fonte Buono n°19 – 00142 Rome (P. IVA n°16639311006) – email: info@ cylock .tech , hereinafter also referred to as the Owner.</p>
        <p className={styles.desc}>Our goal is to provide anyone and everywhere with the possibility of being able to verify their online security, through a simple and understandable tool for everyone, capable of testing their level of defense against hacker and phishing attacks and providing answers in moments critical data management, including personal data.</p>
        <p className={styles.desc}>It is our intention to continue to improve the security of online places through a customer service that can provide the tools to support efforts to remediate ICT multi-layered vulnerabilities.</p>
        <p className={styles.desc}>Users who use the Services offered by this site or on those of third parties to which this site refers and by the applications connected to it or to which this site refers, including those of third parties, declare that they know and fully and unreservedly accept these terms and general terms and conditions.</p>
        <h4>Use of the online services present on this Application, on the applications connected to it or to which this site refers, including from third parties</h4>
        <p className={styles.desc}>The User who uses the services on this site and the applications, including those of third parties, connected to it or to which this site refers (hereinafter referred to as "Services" for the sake of brevity), is solely responsible for their use, such uses falling entirely under his responsibility.</p>
        <p className={styles.desc}>Any explanatory and/or summary texts provided for the use of the Services or after the use of these, in no case replace a technical or legal opinion, nor do they replace the assistance or advice of a professional. In fact, these texts have the mere purpose of facilitating the use and understanding of the Services, they are not exhaustive and may not be adapted to the specific case, whether or not it concerns the user.</p>
        <p className={styles.desc}>The Owner is a mere technical supplier of the Services and cannot in any case be held responsible for the use that the User makes of the same, nor with respect to the achievement of the purposes of use of the Services themselves; in particular, no guarantee is given of the suitability of the services offered for the particular purposes set by the User.</p>
        <p className={styles.desc}>The Services offered, in particular, concern the so-called AntiHacker test and the so-called AntiPhishing test.</p>
        <p className={styles.desc}>The Antihacker test is carried out through a hacker attack simulation using automatic open source tools recognized by the market and through the manual intervention of the Owner's CEH certified personnel. The purpose of the test is to identify vulnerabilities present on the URL or IP address indicated by the user. </p>
        <p className={styles.desc}>The AntiPhishing test is carried out by periodically sending e-mails specially prepared by the Owner to simulate a phishing attack, through a list of e-mails provided by the User. </p>
        <h4>The Service is provided "as is"</h4>
        <p className={styles.desc}>Each of the Services provided here by the Owner must be expressly understood "as is", i.e. they are provided without any express or implied guarantee of results, accuracy, availability or truthfulness.</p>
        <p className={styles.desc}>Under no circumstances can the Owner be held responsible in relation to the correct functioning, availability or in any case of the Services provided, whether they are provided by the Owner himself or by any third parties.</p>
        <h4>Indemnity</h4>
        <p className={styles.desc}>The User, who with the use of the Services offered by the Owner accepts these conditions of use, undertakes to indemnify the Owner, providing express indemnity in this sense, as well as any companies controlled or affiliated by the same, its representatives, directors, agents, licensors, partners and employees, from any obligation or liability, including compensation, including any legal fees incurred, which may arise in respect of damages caused to yourself, other users or third parties in relation to the use of the contents and the Services, even if uploaded or uploaded online, or in any case even if used in violation of the law or of the terms of these conditions of use.</p>
        <p className={styles.desc}>The user acknowledges and accepts that the use of the Services involves a substantial risk, by accepting it, and expressly declares, for himself or for anyone he represents, that the Owner cannot be held responsible for any damage or loss, even in relation to loss of commercial opportunities, whether direct or indirect, possibly suffered by the user, other users or third parties (such as, by way of example but not limited to, the initiation of procedures to respond to attacks, activation of measures and/or countermeasures of any nature, including the involvement of third party partners of the user, other users or third parties, commercial losses, loss of revenues, income, profits or actual or presumed savings, loss of contracts or commercial relationships,loss of reputation or goodwill, etc.), also due to and/or deriving from interruptions or malfunctions of this site, of the applications connected to it or to which this site refers, including from third parties, and for damages of any kind due to events of force majeure or, in any case, to unforeseen and unpredictable events independent of the will and unrelated to the sphere of control of the Data Controller such as, by way of example but not limited to, breakdowns or interruptions to telephone or electricity lines, to the internet and/or in any case to other transmission tools, unavailability of websites, strikes, natural events, viruses and computer attacks, interruptions in the supply of third-party products, services or applications or even in case of incorrect,unsuitable and/or malicious or fraudulent use of this Application by the user or third parties.</p>
        <h4>Use not permitted</h4>
        <p className={styles.desc}>The Services must be used exclusively in accordance with the provisions of these general terms and conditions. In particular, the user is not allowed to reverse engineer, decompile, disassemble, modify or create works, even intangible, deriving from or based on this site and the applications connected to it or to which this site refers, including from third parties; circumvent the computer systems used by this site and the applications connected to it or to which this site refers, including those of third parties, to protect the content accessible through it; copy, store, modify, change, prepare derivative works or alter in any way any of the contents provided by this site and the applications connected to it or to which this site refers, also from third parties; use any robot, spider, site search and/or retrieval application, or any other automatic device, process or means to access, retrieve, scrape or index any portion of this site and any applications connected to it or to which this site refers, including from third parties, or their contents.</p>
        <p className={styles.desc}>The use of the Services of this site, and of those to which it may refer, towards domains, IP and/or FTP addresses and email boxes or in any case IT tools of any nature (software and hardware) not owned by the user/user, in the legal availability of these or in any case expressly authorized by the owner in this sense.</p>
        <h4>Intellectual Property Rights</h4>
        <p className={styles.desc}>All trademarks of this site, of the applications connected to it or to which this site refers, including those of third parties, whether figurative or nominative, as well as all other signs, trade names, service marks, word marks, trade names, illustrations , images, logos that appear in the terms indicated above are and remain the exclusive property of the Owner, its licensors or the third parties to which they refer and are protected by the laws in force on trademarks and by the related international treaties</p>
        <h4>Processing of personal data </h4>
        <p className={styles.desc}>Any personal data processed in the provision of the services offered here will be managed in accordance with current legislation on the matter. For further information, please refer to the <Link href='/privacy' className={styles.link}>Privacy & Cookie Policy</Link> .</p>
        <p className={styles.desc}>Last update of these conditions: 15 September 2021.</p>
      </div>
    </div>
  )
}

export default Terms
