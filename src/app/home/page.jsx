import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import SatisfiedSection from '@/components/staisfiedCustomer/SatisfiedSection';

const logoSrc = [
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    },
    {
      src: "/slider.png",
    }
  ];
  


const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.mainHeadings}>
            <h1 className={styles.firstHeading}>YOUR VIRTUAL ETHICAL HACKER</h1>
            <h4 className={styles.secHeading}>Vulnerability Assessment and Penetration Testing in 1 click</h4>
        </div>

        <div className={styles.formDiv}>
            <div className={styles.form}>
                <form action="post">
                    <label htmlFor="">Enter URL or IP address</label>
                    <br />  
                    <input className={styles.input} type="text" placeholder='URL or IP to test' required />
                    <br />
                    <br />
                    <label htmlFor="">Enter your company email address</label>
                    <br />
                    <input className={styles.input} type="text" placeholder='email to get report' required/>
                    <br />
                    <br />
                    <input  type="checkbox" name="" id="" />
                    <label htmlFor="">I agree to the Terms and Conditions</label>
                    <br />
                    <br />
                    <Link href='/'className={styles.policies} >T&C Privacy Policy</Link>
                    <br />
                    <button className={styles.button}>Request Scanning</button>
                    <br />
                    <label htmlFor="">Try CyLock for only €3</label>
                </form>

            </div>
            <div className={styles.desc}>
                <h3 className={styles.title}>Discover immediately how many vulnerabilities affect your target</h3>
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
        
        <div className={styles.artificial}>
            <div className={styles.mainContent}>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/> Artificial Intelligence for cybersecurity tests</h1>
                    <p>Thanks to AI, CyLock self-configures, simulanting thousands of targeted attacks with speed and accuracy</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Quick and accurate website pentesting</h1>
                    <p>CyLock Anti-Hacker tests any IT system. It simulates thousands of attacks executing quick and accurate penetration tests</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Phishing simulation on business email addresses</h1>
                    <p>CyLock simulates phishing attacks with increasing difficulty levels, discovering if people are able to recognise a phishing attempt</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Secure Pentesting tool and certified report</h1>
                    <p>CyLock is 100% secure: our penetration tests are certified by certified ethical hacker and are valid for ISO 27001</p>
                </div>
            </div>
            <div className={styles.image1}>
                <Image src='/artificial.png'  width={600} height={600} className={styles.image3}/>
            </div>
        </div>


        <div className={styles.artificial}>
            
            <div className={styles.image1}>
                <Image src='/artificial.png'  width={600} height={600} className={styles.image2}/>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/> Artificial Intelligence for cybersecurity tests</h1>
                    <p>Thanks to AI, CyLock self-configures, simulanting thousands of targeted attacks with speed and accuracy</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Quick and accurate website pentesting</h1>
                    <p>CyLock Anti-Hacker tests any IT system. It simulates thousands of attacks executing quick and accurate penetration tests</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Phishing simulation on business email addresses</h1>
                    <p>CyLock simulates phishing attacks with increasing difficulty levels, discovering if people are able to recognise a phishing attempt</p>
                </div>
                <div className={styles.content1}>
                    <h1 className={styles.ai}> <Image src='/hacker.png' className={styles.image} width={40} height={40}/>  Secure Pentesting tool and certified report</h1>
                    <p>CyLock is 100% secure: our penetration tests are certified by certified ethical hacker and are valid for ISO 27001</p>
                </div>
            </div>
        </div>

      </div>
      
      <div className={styles.secContainer}>
        <h2 className={styles.heading1}>Some of the companies that chose us</h2>
      <div className="h-[132px] w-full bg-[#FFFFFF] flex flex-col border items-center justify-center gap-1">
        {/* Brands We Sell */}
        <div
          className="w-full h-[28px] text-[#242424] flex justify-center items-center"
          id="brands"
        >
        </div>
        {/* <div className="flex gap-1">
          {logoSrc.map((logo, index) => {
            return (
              <Image
                key={index}
                src={logo.src}
                alt="logo"
                width={161}
                height={56}
                className="object-contain"
              />
            );
          })}
        </div> */}
        <Marquee velocity={12}>
          {logoSrc.map((logo, index) => {
            return (
              <Image
                key={index}
                src={logo.src}
                alt="logo"
                width={200}
                height={130}
                className={styles.carrosel}
              />
            );
          })}
        </Marquee>
      </div>
      </div>

      <div className={styles.thirdContainer}>
        <h1 className={styles.mainHeadings}>CyLock: 360° protection for your company network</h1>
        <div className={styles.mainDiv}>
            <div className={styles.inner1}>
                <p className={styles.heading}>Vaptesting in 1 click</p>
                <p>CyLock Anti-Hacker executes vulnerability assessments and penetration tests to test business IT systems and find weaknesses in your company’s network or website.</p>
                <p>Data in your dashboard are constantly updated, so that you can monitor with just one click your overall risk level and make the best decisions for your business. </p>
                <br />
                <h5>VAPT in 1 Click</h5>
            </div>
            <div className={styles.inner2}>
                <Image className={styles.hideImage} alt='' src='/phishing.png' width={300} height={300}/>
            </div>
        </div>


        <div className={styles.mainDiv}>
            <div className={styles.inner2}>
                <Image alt='' src='/phishing.png' width={300} height={300}/>
            </div>
            <div className={styles.inner1}>
                <p className={styles.heading}>Vaptesting in 1 click</p>
                <p>CyLock Anti-Hacker executes vulnerability assessments and penetration tests to test business IT systems and find weaknesses in your company’s network or website.</p>
                <p>Data in your dashboard are constantly updated, so that you can monitor with just one click your overall risk level and make the best decisions for your business. </p>
                <br />
                <h5>VAPT in 1 Click</h5>
            </div>
        </div>

      </div>

      <div className={styles.secondContainer}>
      <Image src='/clusit.jpg' width={250} height={150}/>
        <h2 className={styles.certifications}>Our certifications</h2>
        <div className={styles.imageContainer}>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        </div>
        <h2 className={styles.certifications}>Our partners and investitors</h2>
        <div className={styles.imageContainer}>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        </div>

      </div>

      <div className={styles.fourthContainer}>
      <h1 className={styles.mainHeadings}>CyLock: 360° protection for your company network</h1>
        <div className={styles.mainDiv}>
            <div className={styles.inner1}>
                <h2 className={styles.heading}>Pentest report to continuously monitor your company cyber security</h2>
                <p>Companies that don’t test periodically their digital tools and their staff’s skills are more exposed to the risk of cyber attacks, such as ransoms that jeopardise business operation, data and document theft, stop of e-commerce sales or payment processing. Secure your company with our tests, they are programmed to test periodically your systems.  </p>
                <br />
            </div>
            <div className={styles.inner2}>
                <Image className={styles.hide2} alt='' src='/antihacker2.png' width={250} height={250}/>
            </div>
        </div>
        <div className={styles.mainDiv}>
        <div className={styles.inner2}>
                <Image className={styles.editImage} alt='' src='/loop.png' id='image' width={250} height={250}/>
            </div>
            <div className={styles.inner1}>
                <h2 className={styles.heading}>Pentest report to continuously monitor your company cyber security</h2>
                <p>Companies that don’t test periodically their digital tools and their staff’s skills are more exposed to the risk of cyber attacks, such as ransoms that jeopardise business operation, data and document theft, stop of e-commerce sales or payment processing. Secure your company with our tests, they are programmed to test periodically your systems.  </p>
                <br />
            </div>
            
            
        </div>

        <div className={styles.mainDiv}>
            <div className={styles.inner1}>
                <h2 className={styles.heading}>Pentest report to continuously monitor your company cyber security</h2>
                <p>Companies that don’t test periodically their digital tools and their staff’s skills are more exposed to the risk of cyber attacks, such as ransoms that jeopardise business operation, data and document theft, stop of e-commerce sales or payment processing. Secure your company with our tests, they are programmed to test periodically your systems.  </p>
                <br />
            </div>
            <div className={styles.inner2}>
                <Image alt='' src='/antihacker2.png' width={250} height={250}/>
            </div>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <Image src='/clusit.jpg' width={250} height={150}/>
        <h2 className={styles.certifications}>Our certifications</h2>
        <div className={styles.imageContainer}>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        </div>
        <h2 className={styles.certifications}>Our partners and investitors</h2>
        <div className={styles.imageContainer}>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        <Image src='/ceh.jpg' width={150} height={100}/>
        </div>

      </div>
        

    </div>
  )
}

export default Home
