/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser'

// export default function MessageComponent() {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault()
//       console.log(form.current.value)

//       const nameInput = form.current.querySelector('input[name="name"]');
//       const emailInput = form.current.querySelector('input[name="email"]');
//       const subjectInput = form.current.querySelector('input[name="subject"]');
//       const messageInput = form.current.querySelector('textarea[name="message"]');

//       if(!nameInput.value || !emailInput.value || !messageInput.value){
//         console.log("fill in the inputs")
//       } else{
//         emailjs.sendForm('service_vsgptk4', 'template_7a3mjj6', form.current, 'Us_ltJ4oEWZ5s2Lbl')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });

//       }
//       };

//   return (
//     <form ref={form} className="flex flex-col gap-3" onSubmit={sendEmail}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name *"
//         className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email *"
//         className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"
//       />
//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject *"
//         className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"
//       />
//       <textarea
//         name="message"
//         id=""
//         cols="30"
//         rows="7"
//         placeholder="Message *"
//         className="bg-[#313030] px-5 py-3 rounded-xl block outline-none"
//       />
//       <input className="bg-[#313030] hover:bg-[#fff] hover:text-[#333] transition-all duration-200 px-5 py-3 rounded-xl" type="submit" value="Send Message" />
//       {/* <button onClick={sendEmail} className="bg-[#313030] hover:bg-[#fff] hover:text-[#333] transition-all duration-200 px-5 py-3 rounded-xl">
//         Send Message
//       </button> */}
//     </form>
//   );
// }

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function MessageComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const newFormError = {
      name: !formData.name,
      email: !formData.email,
      subject: !formData.subject,
      message: !formData.message,
    };

    setFormError(newFormError);

    if (Object.values(newFormError).some((error) => error)) {
      console.log("Please fill in all the required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_vsgptk4",
        "template_7a3mjj6",
        e.target,
        "Us_ltJ4oEWZ5s2Lbl"
      )
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Name *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none ${
          formError.name ? "border-red-500" : ""
        }`}
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none ${
          formError.email ? "border-red-500" : ""
        }`}
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none ${
          formError.subject ? "border-red-500" : ""
        }`}
        value={formData.subject}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        cols="30"
        rows="7"
        placeholder="Message *"
        className={`bg-[#313030] px-5 py-3 rounded-xl block outline-none ${
          formError.message ? "border-red-500" : ""
        }`}
        value={formData.message}
        onChange={handleInputChange}
      />
      <input
        className="bg-[#313030] hover:bg-[#fff] hover:text-[#333] transition-all duration-200 px-5 py-3 rounded-xl"
        type="submit"
        value="Send Message"
      />
    </form>
  );
}
