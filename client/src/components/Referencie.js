import '../styles/Referencie.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function Referencie() {
  const { t } = useLanguage();

  return (
    <div className="referencie-wrapper">
      <div className="container">
        <h1 className="referencie-heading">{t('Referencie.header')}</h1>
        <p className="referencie-intro">{t('Referencie.intro')}</p>

        <div className="testimonials">
          
          <div className="testimonial-box">
            <div className="testimonial-header">{t('Referencie.review1.header')}</div>
            <p className="testimonial-text">{t('Referencie.review1.text')}</p>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-header">{t('Referencie.review2.header')}</div>
            <p className="testimonial-text">{t('Referencie.review2.text')}</p>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-header">{t('Referencie.review3.header')}</div>
            <p className="testimonial-text">{t('Referencie.review3.text')}</p>
          </div>

        </div>
      </div>
    </div>
  );
}