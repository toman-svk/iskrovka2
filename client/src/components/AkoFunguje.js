import '../styles/AkoFunguje.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function AkoFunguje() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="ako-funguje">
        <div className="ako-funguje-content">
          <h1>{t('AkoFunguje.header')}</h1>
          <p>{t('AkoFunguje.paragraph1')}</p>

          <p className="ako-funguje-zoznam">
            {t('AkoFunguje.checklist').map((item, index) => (
              <span key={index}>✅ {item}<br /></span>
            ))}
          </p>

          <button
            className="cta-button"
            onClick={() => window.open('images/ukazka_z_merania.pdf', '_blank')}
          >
            {t('AkoFunguje.button')}
          </button>
        </div>
      </div>
    </div>
  );
}