import { useTranslation } from "react-i18next";
import { supportedLanguages, getBestMatchLanguage } from "../i18n";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    const bestMatch = getBestMatchLanguage(lng);
    i18n.changeLanguage(bestMatch);
  };

  const getLanguageDisplayName = (langCode) => {
    switch (langCode.toLowerCase()) {
      case "en":
        return "English";
      case "zh-tw":
        return "繁體中文";
      case "zh-cn":
        return "简体中文";
      default:
        return langCode;
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center lg:justify-start gap-2 mt-6 bg-n-8 rounded-lg p-4">
      {supportedLanguages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-4 py-2 text-sm lg:text-base transition-colors whitespace-nowrap ${
            i18n.language.toLowerCase() === lng.toLowerCase()
              ? "text-color-1" // 紫色
              : "text-n-1 hover:text-color-1"
          }`}
        >
          {getLanguageDisplayName(lng)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
