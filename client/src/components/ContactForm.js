import '../styles/ContactForm.css';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();

  const url = "https://script.google.com/macros/s/AKfycbxjxYa3NaUXWG2QIZ6vEZAuZhdc_1QNo5sTvbLjDwYywrX-voiWUi7dzBPwMvciC1r-/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();
      alert(t('ContactForm.success-alert'));
      e.target.reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert(t('ContactForm.error-alert'));
    }
  };

  return (
    <div className='contact-form-wrapper'>
      <div className="container" id="contact-form">
        <div className="contact-form-section">
          <div className="section-left">
            <h2>{t('ContactForm.header')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">{t('ContactForm.name-label')}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('ContactForm.name-placeholder')}
                required
              />

              <label htmlFor="email">{t('ContactForm.email-label')}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('ContactForm.email-placeholder')}
                required
              />

              <label htmlFor="message">{t('ContactForm.message-label')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('ContactForm.message-placeholder')}
                required
              ></textarea>

              <div className="checkbox-row">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">{t('ContactForm.terms-label')}</label>
              </div>

              <button type="submit" className="submit-button">
                {t('ContactForm.submit-button')}
              </button>
            </form>
          </div>

          <div className="section-right">
            <img
              src="/images/adam/adam2.jpg"
              alt="Iskrová skúška na streche"
              className="contact-image"
            />
          </div>
        </div>
      </div>

    </div>
    
  );
}