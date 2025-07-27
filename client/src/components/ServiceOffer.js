import '../styles/ServiceOffer.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceOffer() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "/images/house-circle-check.png",
      title: t('ServiceOffer.card1'),
    },
    {
      icon: "/images/bonus-alt.png",
      title: t('ServiceOffer.card2'),
    },
    {
      icon: "/images/piggy-bank.png",
      title: t('ServiceOffer.card3'),
    },
  ];

  return (
    <div className="service-offer-wrapper">
      <div className="container">
        <h1>{t('ServiceOffer.header1')}</h1>
        <p>{t('ServiceOffer.text1')}</p>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              {/* Optional: Add description support later if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}