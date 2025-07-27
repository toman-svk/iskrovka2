import '../styles/AboutSection.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="about-section-wrapper">
      <div className="container">
        <div className="about-section container">
          <div className="about-left">
            <h1>{t('AboutSection.header1')}</h1>
            <p>{t('AboutSection.text1')}</p>
            <button className="cta-button">{t('AboutSection.button1')}</button>
          </div>
          <div className="about-right">
            <img
              src="/images/lubos_iskri.jpg"
              alt={t('AboutSection.header1')}
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}