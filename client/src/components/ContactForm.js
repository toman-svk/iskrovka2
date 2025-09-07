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
            <h1>{t('ContactForm.header')}</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <label htmlFor="name">
                {t('ContactForm.name-label')} <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('ContactForm.name-placeholder')}
                required
              />

              <label htmlFor="email">
                {t('ContactForm.email-label')} <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('ContactForm.email-placeholder')}
                required
              />

              <label htmlFor="phone">
                {t('ContactForm.phone-label')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t('ContactForm.phone-placeholder')}
              />

              <label htmlFor="message">
                {t('ContactForm.message-label')} <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t('ContactForm.message-placeholder')}
                required
              ></textarea>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  onInvalid={e =>
                    e.target.setCustomValidity(t('ContactForm.error-message'))
                  }
                  onInput={e => e.target.setCustomValidity("")}
                />
                <a
                  href="/images/podmienky.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terms-link"
                >
                  {t('ContactForm.terms-label')} <span className="required">*</span>
                </a>
              </div>

              <button type="submit" className="orange-button">
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