import React from 'react'
import Layout from '../layout/Layout'
import Image from 'next/image'
import home from '../../../public/image/home/home.jpg'
import styles from './Landing.module.css'



const LandingPage = () => {
    return (
        <Layout>
            <main className={styles.landing_container}>
                <div className={styles.landing_right_content}>
                    <h4 className={styles.langing_text_h4}><span className={styles.langing_text_span}>¿Necesitas ayuda</span> y estás en <span className={styles.langing_text_span}>busca</span> de un profesional? </h4>
                    <p className={styles.langing_text_p}>
                        Contáctate a los especialistas <br></br> te van a brindar el  mejor servicio.                    
                    </p>
                    <div className='boton'>
                    {/* <Button variant="primary" size="sm" className='styledButton shadow-sm p-3 mb-5'  href="/servicios">Explorar Servicios</Button> */}
                    </div>
                </div>
                <div className={styles.landing_left_content}>
                    <Image className={styles.landing_left_img} src={home} alt="" priority={true}/>
                </div>
            </main>
        </Layout>
    )
}

export default LandingPage