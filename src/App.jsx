import { useTranslation } from 'react-i18next';
import i18n  from './i18n.js';

function App() {
  const { t } = useTranslation();
  return (
    <div className="container">
      {/* Navbar - start */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">i18next</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary><i className="bi bi-translate"></i></summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a onClick={() => i18n.changeLanguage('en')} className="text-nowrap">English</a>
                  </li>
                  <li>
                    <a onClick={() => i18n.changeLanguage('ru')} className="text-nowrap">Russian</a>
                  </li>
                  <li>
                    <a onClick={() => i18n.changeLanguage('ko')} className="text-nowrap">Korean</a>
                  </li>
                  <li>
                    <a onClick={() => i18n.changeLanguage('uz')} className="text-nowrap">O'zbek</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar - end */}

      <div className="border border-gray-400 rounded-lg flex flex-col justify-center items-center p-4">
        <h1 className='block'>{t('header.title')}</h1>
        <p>{t('header.subtitle')}</p>
      </div>

    </div>
  );
}

export default App;
