import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from'../../../public/image/logoneatme.png'
import styles from './Navbar.module.css'
import { FaFaBars, FaFaTimes, File, Folder, Github, Home, Html, Linkend, PythonL, Tableau, User } from '../icon/index'
import {Navbarmovile, CustomLink} from './Navbarmovile'


const Navbar = () => {

    return (
        <header className={styles.navbar_header}>
                <Link href='/' ><Image className={styles.navbar_logo} src={Logo} alt='logo' priority={true}/></Link>
            <nav className={styles.navbar_container}>
                <CustomLink href="/" title='Inicio' />
                <CustomLink href="/servicios" title='Servicios' />
                <CustomLink href="/ocupaciones" title='Ocupaciones ' />
                <CustomLink href="/about" title='Quienes somos?' />
            </nav>
            <nav className={styles.navbar_container}>
                <Link className={styles.navbar_registro} href="/">Iniciar sesion</Link>
                <Link className={styles.navbar_registro} href="/">ingresar</Link>
                
            </nav>       

                <nav className={styles.navbar_footer}>
                    <div className={styles.navbar_footer_container}>
                            <Navbarmovile className={styles.otro} href='/' icon={<Home/>} title='Home' />
                            <Navbarmovile className={styles.otro} href='/about' icon={<User/>} title='About' />
                            <Navbarmovile className={styles.otro} href='/about' icon={<User/>} title='About' />
                            <Navbarmovile className={styles.otro} href='/projects' icon={<Folder/>} title='Projects' />
                            <Navbarmovile className={styles.otro} href='/article' icon={<File/>} title='Article' />
                    </div>
                            </nav>
            
        </header>
    )
}

export default Navbar