import '../styles/Referencie.css';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef } from 'react';

export default function Referencie() {
  const { t } = useLanguage();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="referencie-wrapper">
      <div className="container">
        <h1 className="referencie-heading">{t('Referencie.header')}</h1>
        <p className="referencie-intro">{t('Referencie.intro')}</p>

        <div className="testimonials">
          {[1,2,3].map((_, i) => (
            <div
              key={i}
              className="testimonial-box"
              ref={el => (cardsRef.current[i] = el)}
            >
              <div className="testimonial-header">{t(`Referencie.review${i+1}.header`)}</div>
              <p className="testimonial-text">{t(`Referencie.review${i+1}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}