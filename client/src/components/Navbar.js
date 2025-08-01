import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';
import { FaBars } from 'react-icons/fa'; // Hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const navRef = useRef();

  const { t, setLanguage, language } = useLanguage();

  const languages = {
    sk: {
      label: 'Slovenčina',
      flag: '/images/slovakia.png',
    },
    cz: {
      label: 'Čeština',
      flag: '/images/czechia.png',
    },
    en: {
      label: 'English',
      flag: '/images/english.png',
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">

        {/* Mobile layout */}
        <div className='navbar-left-mobile'>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <div className="language-selector-wrapper">
            <div className="language-selector">
              <button
                className="language-button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <img
                  src={languages[language].flag}
                  alt={languages[language].label}
                  className="flag-icon"
                />
              </button>

              {languageMenuOpen && (
                <div className="language-dropdown">
                  {Object.entries(languages)
                    .filter(([key]) => key !== language)
                    .map(([code, { label, flag }]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code);
                          setLanguageMenuOpen(false);
                        }}
                      >
                        <img src={flag} alt={label} className="flag-icon small" />
                        {label}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile nav links (toggle with hamburger) */}
        {menuOpen && (
          <div className="nav-links-mobile">
            <Link to="/" className="normal-button" onClick={() => setMenuOpen(false)}>
              {t('Navbar.home-button')}
            </Link>
            <Link to="/about" className="normal-button" onClick={() => setMenuOpen(false)}>
              {t('Navbar.o-skuske-button')}
            </Link>
            <Link to="/contact" className="contact-button" onClick={() => setMenuOpen(false)}>
              {t('Navbar.contact-button')}
            </Link>
          </div>
        )}

        <div className='navbar-right-mobile'>
          <img src="/images/logo_na_modrom.png" alt="Logo" className="logo" />
        </div>

        {/* Desktop layout */}
        <div className="navbar-left">
          {/* Language Selector */}
          <div className="language-selector-wrapper">
            <div className="language-selector">
              <button
                className="language-button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <img
                  src={languages[language].flag}
                  alt={languages[language].label}
                  className="flag-icon"
                />
              </button>

              {languageMenuOpen && (
                <div className="language-dropdown">
                  {Object.entries(languages)
                    .filter(([key]) => key !== language)
                    .map(([code, { label, flag }]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code);
                          setLanguageMenuOpen(false);
                        }}
                      >
                        <img src={flag} alt={label} className="flag-icon small" />
                        {label}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop nav links (always shown on larger screens) */}
            <Link to="/" className="normal-button">
              {t('Navbar.home-button')}
            </Link>
            <Link to="/about" className="normal-button">
              {t('Navbar.o-skuske-button')}
            </Link>
            <Link to="/contact" className="contact-button">
              {t('Navbar.contact-button')}
            </Link>
        </div>

        <div className="navbar-right">
          <img src="/images/logo_na_modrom.png" alt="Logo" className="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;