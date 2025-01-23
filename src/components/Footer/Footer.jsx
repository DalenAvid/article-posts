import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footerBody}>
                    <div className={styles.footerText}>
                        <p>CONTACT</p>
                        <h2>
                            We're focused on building brands and a better future. <br />
                            If you'd like to partner with us, we're here to talk.
                        </h2>
                    </div>
                    <div className={styles.footerNav}>
                        <div>
                            <ul>
                                <li><a href="#">Open Spaces</a></li>
                                <li><a href="#">GIR</a></li>
                                <li><a href="#">Letterfolk</a></li>
                                <li><a href="#">Yield</a></li>
                                <li><a href="#">Poketo</a></li>
                                <li><a href="#">Equal Parts</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Intsagram</a></li>
                                <li><a href="#">Twitter X</a></li>
                            </ul >
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">228 Park Ave S.</a></li>
                                <li><a href="#">New York, NY 10003</a></li>
                                <li><a href="#">acquisitions@patternbrands.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.footerBodyBot}>
                    <p>© 2022 Pattern Brands</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
