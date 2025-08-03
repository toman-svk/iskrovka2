import React, { useEffect, useRef } from 'react';
import '../styles/ServiceOffer.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceOffer() {
  const { t } = useLanguage();
  const cardsRef = useRef([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-offer-wrapper">
      <div className="container">
        <div className='service-offer-section'> 
          <h1>{t('ServiceOffer.header1')}</h1>
          <p>{t('ServiceOffer.text1')}</p>
          <div className="service-grid">
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}