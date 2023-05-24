import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from'../../../public/image/logoneatme.png'
import styles from './Navbar.module.css'
import {Navbarmovile, CustomLink} from './Navbarmovile'


const Navbar = () => {

    return (
        <header className={styles.navbar_header}>
                    <Link href="/" className={styles.navbar_logo_link}><Image className={styles.navbar_logo} src={Logo} alt='logo' priority={true} /></Link>
                <nav className={styles.navbar_container}>
                        <CustomLink href="/" title='Home' />
                        <CustomLink href="/about" title='About' />
                        <CustomLink href="/projects" title='Projects ' />
                        <CustomLink href="/article" title='Article' />
                </nav>
                

                {/* <nav className={styles.navbar_footer}>
                    <div className={styles.ensayo}>
                            <Navbarmovile className={styles.otro} href='/' icon={<Home/>} title='Home' />
                            <Navbarmovile className={styles.otro} href='/about' icon={<User/>} title='About' />
                            <Navbarmovile className={styles.otro} href='/projects' icon={<Folder/>} title='Projects' />
                            <Navbarmovile className={styles.otro} href='/article' icon={<File/>} title='Article' />
                    </div>
                            </nav> */}
            
        </header>
    )
}

export default Navbar