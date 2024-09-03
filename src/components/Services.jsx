import { useTranslation } from "react-i18next";
import { features } from "../constants/index.jsx";
const ServicesDropdown = () => {
  const { t } = useTranslation();

  const services = [
    { name: 'features1_title', url: '/InningIQ/InningIQAssistant' },
    { name: 'jyBaseball', url: 'https://vaclisinc.github.io/jyBaseball/' },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center lg:justify-start gap-2 mt-6 bg-n-8 rounded-lg p-4">
      {features.map((service, index) => (
        <a
          key={index}
          href={service.url}
          className="justify-center px-4 py-2 text-sm lg:text-base transition-colors whitespace-nowrap text-n-1 hover:text-color-1"
        >
          {t(service.title)}
        </a>
      ))}
    </div>
  );
};

export default ServicesDropdown;