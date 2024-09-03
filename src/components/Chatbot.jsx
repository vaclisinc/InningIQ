import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { gradient } from "../assets";

const Chatbot = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // 這裡可以添加發送消息到後端的邏輯
    }
  };

  return (
    <Section className="pt-[8rem] -mt-[3rem]" crosses>
        <div className="absolute -top-[40%] left-1/2 w-[200%] -translate-x-1/2 md:-top-[35%] md:w-[120%] lg:-top-[80%]">
            <img
              src={gradient}
              className="w-full"
              width={1800}
              height={1200}
              alt="Gradient"
            />
          </div>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl mb-8" 
          title={t("chatbot1Title")}
        />
        <div className="max-w-[62rem] mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-6"> 
              <div className="h-[25rem] overflow-y-auto mb-4 space-y-3"> 
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] p-4 rounded-xl ${message.sender === 'user' ? 'bg-primary-1 text-n-1' : 'bg-n-6 text-n-1'}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow bg-n-6 text-n-1 rounded-l-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-1"
                  placeholder={t('typeYourMessage')}
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-primary-2 text-n-1 px-6 py-4 rounded-r-lg hover:bg-primary-2 transition duration-300"
                >
                  {t('send')}
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
};

export default Chatbot;
