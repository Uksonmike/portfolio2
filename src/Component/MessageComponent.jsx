import { useState } from "react";
import { createClient } from "smtpexpress";

export default function MessageComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const smtpexpressClient = createClient({
    projectId: "sm0pid-KOdx7__e_6GYc0unlcAEFhpLU",
    projectSecret: "sm0pid-KOdx7__e_6GYc0unlcAEFhpLU@projects.smtpexpress.com",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMail = () => {
    smtpexpressClient.sendApi.sendMail({
      subject: "A message from the express",
      message: "<h1> Welcome to the future of Email Delivery </h1>",
      sender: {
        name: "Tenotea",
        email: "tenotea@smtpexpress.com",
      },
      recipients: {
        name: "Uksonmike",
        email: "uksonmike@gmail.com",
      },
    });
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none`}
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none`}
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none`}
        value={formData.subject}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        cols="30"
        rows="7"
        placeholder="Message *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none`}
        value={formData.message}
        onChange={handleInputChange}
      />
      <input
        className="bg-[#313030] hover:bg-[#fff] hover:text-[#333] transition-all duration-200 px-5 py-3 rounded-xl"
        type="submit"
        value="Send Message"
        onClick={sendMail}
      />
    </form>
  );
}
