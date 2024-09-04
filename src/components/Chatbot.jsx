import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import axios from "axios";
import Section from "./Section";
import Heading from "./Heading";
import { gradient } from "../assets";
import Image from "./Image";
import FullScreenImage from "./FullScreenImage";

const Chatbot = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "" || attachment) {
      // 添加用戶消息到聊天記錄
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: "user" },
      ]);
      setInputMessage("");
      setIsLoading(true);

      const formData = new FormData();
      formData.append("message", inputMessage);
      if (attachment) {
        formData.append("file", attachment);
      }

      try {
        const response = await axios.post(
          "https://8820-110-28-64-56.ngrok-free.app/chat_data",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
            responseType: 'arraybuffer'
          }
        );
        console.log(response.data);
        const contentType = response.headers['content-type'];
        // 處理後端返回的 AI 回覆
        if (contentType.includes('application/json')) {
          // 处理 JSON 响应
          const jsonData = JSON.parse(new TextDecoder().decode(response.data));
          console.log(jsonData);
          if (jsonData.message) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: jsonData.message, sender: "ai" },
            ]);
          }
        } else if (contentType.includes('image/')) {
          // 处理图片响应
          const imageUrl = URL.createObjectURL(new Blob([response.data], { type: contentType }));
          setMessages((prevMessages) => [
            ...prevMessages,
            { image: imageUrl, sender: "ai" },
          ]);
        } else {
          console.error("後端返回的數據格式不正確");
          setIsLoading(false);
          
          // 可以在這裡添加錯誤處理邏輯，例如顯示錯誤消息
        }

        // setAttachment(null);
      } catch (error) {
        console.error("發送消息時出錯:", error);
        // 可以在這裡添加錯誤處理邏輯
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleImageClick = () => {
    fullScreenImage? setFullScreenImage(false): setFullScreenImage(true);
  };



  const renderMessages = () => {
    return messages.map((message, index) => (
      <div
        key={index}
        className={`flex ${
          message.sender === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-[70%] p-4 rounded-xl ${
            message.sender === "user"
              ? "bg-primary-1 text-n-1"
              : "bg-n-6 text-n-1"
          }`}
        >
          {message.text ? (
            message.text
          ) : message.image ? (
            // <img src={message.image} alt="AI生圖時發生錯誤請再試一次，或檢查會不會匯入的資料有誤" className="max-w-full h-auto" />
            // <Image src={message.image} border={true} zoom={true}></Image>
              <div>
              <img 
                src={message.image} 
                alt="消息图片" 
                onClick={() => handleImageClick()}
                style={{ cursor: 'pointer' }}
              />
              {fullScreenImage && (
                <FullScreenImage 
                  src={message.image} 
                  alt="Full screen image" 
                  onClose={() => setFullScreenImage(false)}
                />
              )}
              </div>
          ) : null}
        </div>
      </div>
    ));
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
                {renderMessages()}
              </div>
              <div className="flex flex-col">
                <div className="flex mb-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow bg-n-6 text-n-1 rounded-l-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-1"
                    placeholder={t("typeYourMessage")}
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-n-6 text-n-1 px-4 py-2 rounded-none"
                  >
                    {attachment ? t("fileAttached") : t("attachFile")}
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="bg-primary-2 text-n-1 px-6 py-4 rounded-r-lg hover:bg-primary-2 transition duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? t("sending") : t("send")}
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                {attachment && (
                  <div className="text-n-1 mt-2">
                    {t("attachedFile")}: {attachment.name}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Chatbot;
