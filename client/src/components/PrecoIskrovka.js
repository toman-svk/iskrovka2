import '../styles/PrecoIskrovka.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrecoIskrovka() {
  const { t } = useLanguage();

  return (
    <div className="preco-section-wrapper">
      <div className="container">
        <div className="preco-section">
          <div className="preco-left">
            <h1>{t('PrecoIskrovka.header')}</h1>
            <p>{t('PrecoIskrovka.text')}</p>
          </div>
          <div className="preco-right">
            <img
              src="/images/lubos_iskri.jpg"
              alt={t('AkoFunguje.header')}
              className="preco-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}