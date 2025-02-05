import { useTranslation } from "react-i18next";
import i18n from "./i18n.js";

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
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm">
              <i className="bi bi-translate"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => i18n.changeLanguage("en")}>
                  <img
                    src="/img/language_icons/en.png"
                    alt=""
                    className="w-5"
                  />
                  <span>English</span>
                </a>
              </li>
              <li>
                <a onClick={() => i18n.changeLanguage("ru")}>
                  <img
                    src="/img/language_icons/ru.png"
                    alt=""
                    className="w-5"
                  />
                  <span>Russian</span>
                </a>
              </li>
              <li>
                <a onClick={() => i18n.changeLanguage("ko")}>
                  <img
                    src="/img/language_icons/ko.png"
                    alt=""
                    className="w-5"
                  />
                  <span>Korean</span>
                </a>
              </li>
              <li>
                <a onClick={() => i18n.changeLanguage("uz")}>
                  <img
                    src="/img/language_icons/uz.png"
                    alt=""
                    className="w-5"
                  />
                  <span>O'zbekcha</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Navbar - end */}

      <div className="border border-gray-400 rounded-lg flex flex-col justify-center items-center p-4">
        <h1 className="block">{t("header.title")}</h1>
        <p>{t("header.subtitle")}</p>
      </div>
    </div>
  );
}

export default App;