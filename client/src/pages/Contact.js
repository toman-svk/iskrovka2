import '../styles/Contact.css';
import ContactForm from "../components/ContactForm";
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "/images/at.png",
      title: t('ContactPage.email-title'),
      description: t('ContactPage.email-description'),
    },
    {
      icon: "/images/phone-call.png",
      title: t('ContactPage.phone-title'),
      description: t('ContactPage.phone-description'),
    },
    {
      icon: "/images/building-flag.png",
      title: t('ContactPage.office-title'),
      description: t('ContactPage.office-description'),
    },
  ];

  return (
    <>
      <div className="contact-wrapper">
        <div className="container">
          <h1>{t('ContactPage.header')}</h1>
          <div className="contact-grid">
            {services.map((service, index) => (
              <div className="contact-card" key={index}>
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}