import { useState } from 'react';
import './Dropdown.css';
import 'flag-icons/css/flag-icons.min.css';
import i18next from 'i18next';
import { FaAngleDown } from 'react-icons/fa';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const languages = [
    // {
    //   code: 'fr',
    //   name: 'Français',
    //   country_code: 'fr',
    // },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'es',
      name: 'Español',
      country_code: 'es',
    },
  ];

  return (
    <div className="dropdown">
      <button className="dropdown_btn" onClick={toggleDropdown}>
        Lang
        <FaAngleDown className={`icon ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="dropdown-content">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className="lang_btn"
                onClick={() => i18next.changeLanguage(code) && setIsOpen(false)}
              >
                <span
                  className={`flag-icon flag-icon-${country_code.toLowerCase()}`}
                ></span>

                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
