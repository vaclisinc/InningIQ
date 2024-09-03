import { useTranslation } from 'react-i18next';

const Chatbot1 = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{t('chatbot1Title')}</h1>
      {/* 在这里添加 chatbot 界面 */}
    </div>
  );
};

export default Chatbot1;
