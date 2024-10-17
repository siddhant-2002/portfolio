import React from 'react';


import styles from "./Studies.module.css";

// import Studies from "../../data/Study.json";
// import { Study } from "./Study";

export const Studies = () => {


    return (
        <section className={styles.container}>
            <div className={styles.title}>
                studies
            </div>
            <div className={styles.section}>

                <div className={styles.diva}>
                    <p className={styles.title}>Batcholors</p>
                    <br />
                    <p className={styles.school}>Sinhgad College Of Engineering, Pune</p>
                    <br />
                    <p className={styles.title1}>Current CGPA: 8.29  Information Technology</p>
                </div>
                <div  className={styles.div2}>
                    <div className={styles.div1}>
                        <p className={styles.title}> SSC Boards</p>
                        <br />
                        <p className={styles.school}>Jawahar Navodaya Vidyalaya, Ahmednagar</p>
                        <br />
                        <p className={styles.title1}>Scored 86.4% </p>

                    </div>
                    <div className={styles.div1}>
                        <p className={styles.title}> HSC Boards</p>
                        <br />
                        <p className={styles.school}>Jawahar Navodaya Vidyalaya, Ahmednagar</p>
                        <br />
                        <p className={styles.title1}> Scored 90% </p>
                    </div>
                </div>
            </div>

        </section>
    );
};


