import React from 'react'
import styles from './Contact.module.css';
import contactLogo from '../../../assets/contact/contact.png';

export const Contact = () => {
	return (
		<div className={styles['contact-container']} id='contact'>
			<div id="contactus" className={styles['contactus-container']}>
				<div className={styles['min-height-container']}>
					<div className={styles.container}>
						<div className={styles['flex-container']}>
							<div className={styles['logo-container']}>
								<img
									src={contactLogo}
									alt="Logo"
									className={styles.logo}
								/>
							</div>
							<div className={styles['form-container']}>
								<h2 className={styles.header}>
									Contact Me
								</h2>
								<form className={styles.form}>
									<label
										htmlFor="name"
										className={styles.label}
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="user_name"
										className={styles.input}
										placeholder="Enter your name"
									/>

									<label
										htmlFor="email"
										className={styles.label}
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="user_email"
										className={styles.input}
										placeholder="Enter your email"
									/>

									<label
										htmlFor="message"
										className={styles.label}
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										className={styles.textarea}
										placeholder="Enter your message"
										rows="4"
									></textarea>

									<button
										type="submit"
										className={styles.button}
									>
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}