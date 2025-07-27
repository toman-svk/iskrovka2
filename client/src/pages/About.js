import '../styles/About.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className='about-outer-wrapper'>
      <div className="container">
        <div className="about-inside-wrapper">

          <h1>{t('AboutPage.header')}</h1>

          <p>{t('AboutPage.paragraph1')}</p>
          <p>{t('AboutPage.paragraph2')}</p>

          <h2>{t('AboutPage.when-header')}</h2>
          <ul className="about-list">
            {t('AboutPage.when-list').map((item, idx) => (
              <li key={`when-${idx}`}>{item}</li>
            ))}
          </ul>

          <h2>{t('AboutPage.benefits-header')}</h2>
          <ul className="about-list">
            {t('AboutPage.benefits-list').map((item, idx) => (
              <li key={`benefit-${idx}`}>{item}</li>
            ))}
          </ul>

          <h2>{t('AboutPage.for-header')}</h2>
          <ul className="about-list">
            {t('AboutPage.for-list').map((item, idx) => (
              <li key={`for-${idx}`}>{item}</li>
            ))}
          </ul>

          <button
            className="about-button"
            onClick={() => window.open('images/ukazka_z_merania.pdf', '_blank')}
          >
            {t('AboutPage.button-sample')}
          </button>

          <button className="about-button">
            {t('AboutPage.button-order')}
          </button>

        </div>
      </div>
    </div>
  );
}