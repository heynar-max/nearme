import React from 'react'
import { FcHome } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";

import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import styles from './Icon.module.css'


export const Home = () => {
    return (
        <div className={styles.cihome}><FcHome/></div>
    )
}
export const User = () => {
    return (
        <div className={styles.cihome}><FcServices/></div>
    )
}
export const Plus = () => {
    return (
        <div className={styles.cihome}><FcPlus/></div>
    )
}
export const Folder = () => {
    return (
        <div className={styles.cihome}><FcWorkflow/></div>
    )
}
export const File = () => {
    return (
        <div className={styles.cihome}><FcAbout/></div>
    )
}


