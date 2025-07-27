import '../styles/PrecoIskrovka.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrecoIskrovka() {
  const { t } = useLanguage();

  return (
    <div className="about-section-wrapper">
      <div className="container">
        <div className="about-section container">
          <div className="about-left">
            <h1>{t('PrecoIskrovka.header')}</h1>
            <p>{t('PrecoIskrovka.text')}</p>
          </div>
          <div className="about-right">
            <img
              src="/images/lubos_iskri.jpg"
              alt={t('AkoFunguje.header')}
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}