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
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t('Referencie.review1.text')}</p>
            <p className="testimonial-author">
              <strong>{t('Referencie.review1.author')}</strong><br />
              {t('Referencie.review1.position')}
            </p>
          </div>

          <div className="testimonial-box">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t('Referencie.review2.text')}</p>
            <p className="testimonial-author">
              <strong>{t('Referencie.review2.author')}</strong><br />
              {t('Referencie.review2.position')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}