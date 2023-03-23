import React from 'react'

// Import components
import ContactForm from '../../components/ContactForm'
import BackButton from '../../components/BackButton'

// Import styles
import styles from './Contact.module.scss'

function Contact() {
  return (
    <main>
      <section className="border-bottom">
            <div className={`container`}>
                <BackButton/>
            </div>
      </section>
      <section>
        <div className="container">
          <h1 className={styles.heading}>Contact</h1>
          <ContactForm/>
        </div>
      </section>
    </main>
  )
}

export default Contact
