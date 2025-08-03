import '../styles/AboutSection.css';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from "react-router-dom";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="about-section-wrapper">
      <div className="container">
        <div className="about-section">
          <div className="about-left">
            <h1>{t('AboutSection.header1')}</h1>
            <p>{t('AboutSection.text1')}</p>
            
            <Link to="/about" className="about-section-button">
                {t('AboutSection.button1')}
            </Link>
          </div>
          <div className="about-right">
            <img
              src="/images/adam/adam1.jpg"
              alt={t('AboutSection.header1')}
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}