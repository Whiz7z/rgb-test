import { useState } from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./phoneStyles.scss";
import { isValidPhoneNumber } from "react-phone-number-input";
import useSendEmail from "../../hooks/useSendEmail";

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [sendEmail] = useSendEmail();

  const onSubmit = (data) => {
    setSubmitting(true);
    console.log(data);

    try {
      sendEmail(data.phone, data.email, data.name);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);

    // clear the form
    setValue("name", "");
    setValue("email", "");
  };
  return (
    <div className={styles.formContainer}>
      <h2>
        Запишитесь <span>бесплатно</span> и получите подарок
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Ваше имя и фамилия"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Это поле обязательно</span>}
        </div>
        <div>
          <PhoneInput
            placeholder="Ваш номер телефона"
            defaultCountry="UA"
            {...register("phone", {
              required: "Это поле обязательно",
              validate: (value) =>
                isValidPhoneNumber(value) ||
                "Некорректный номер телефона enter country code E.g. +380",
            })}
            onChange={(value) =>
              setValue("phone", value, { shouldValidate: true })
            }
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Ваш email"
            {...register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный email адрес",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit" style={{ cursor: "pointer" }}>
          {" "}
          {submitting ? "..." : "Записаться бесплатно"}
        </button>
      </form>

      <p className={styles.privacy}>
        Нажимая на кнопку я согашаюсь
        <br /> <a href="#">с политикой конфидециальности</a>
      </p>
    </div>
  );
};

export default Form;
