import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// 定義支持的語言
export const supportedLanguages = ['en', 'zh-TW', 'zh-CN'];

// 語言到區域的映射
const languageToRegion = {
  'en': 'en',
  'zh-cn': 'zh-cn',  // 簡體中文
  'zh-tw': 'zh-TW',  // 繁體中文（台灣）
  'zh-hk': 'zh-TW',  // 繁體中文（香港）
  'zh': 'zh-TW',     // 默認使用繁體中文
//   'ja': 'ja',
//   'ko': 'ko',
  // 添加更多映射
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: supportedLanguages,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: './locales/{{lng}}/{{ns}}.json', 
        },
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        }
    });

export const getBestMatchLanguage = (detectedLang) => {
    const lowerLang = detectedLang.toLowerCase();
    if (lowerLang.startsWith('zh')) {
        if (lowerLang === 'zh-cn') {
            return 'zh-CN';
        } else {
            return 'zh-TW';
        }
    }
    return languageToRegion[lowerLang] || 'en';
};

export default i18n;