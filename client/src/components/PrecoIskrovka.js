import '../styles/PrecoIskrovka.css';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function PrecoIskrovka() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="preco-section-wrapper">
      <div className="container">
        <div className="preco-section">
          <div className="preco-left">
            <h1>{t('PrecoIskrovka.header')}</h1>
            <button
            className="orange-button"
            onClick={() => navigate('/contact#contact-form')}
          >
            {t('PrecoIskrovka.text')}
          </button>
          </div>
          <div className="preco-right">
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