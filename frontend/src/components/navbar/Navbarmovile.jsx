import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export const CustomLink =({href, title,}) =>{
    const router = useRouter();
    return(
        <Link href={href} className={styles.navbar_link} >
            {title}
            <span className={router.asPath === href ? (styles.w_full) : (styles.navbar_span) }
            >&nbsp;</span>
        </Link>
    )
}

export const Navbarmovile = ({href,title,icon}) => {
    const router = useRouter();
    
    return (
        <Link href={href} className={styles.navbar_link_mobile} >
            {icon} 
            {title}
            <span className={router.asPath === href ? (styles.w_full) : (styles.navbar_span) }
            ></span>
        </Link>
    )
}
