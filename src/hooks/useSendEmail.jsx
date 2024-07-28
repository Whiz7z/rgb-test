import { useState } from "react";
import emailjs from "emailjs-com";

// ?? "template_qvrwkg8"

const useSendEmail = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (phoneNumber, email, name) => {
   

    setSubmitting(true);
    await emailjs
      .send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID ,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        {
          phone: phoneNumber,
          email: email,
          name: name,
        },
        import.meta.env.VITE_REACT_APP_USER_PUBLIC_KEY 
      )
      .then(() => {
        setSubmitting(false);
        setSuccess(true);
      });
  };
  return [sendEmail, submitting, success];
};

export default useSendEmail;