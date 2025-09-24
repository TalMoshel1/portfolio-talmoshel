"use client";

import React, { useState } from "react";
import { Varela_Round } from "next/font/google";
import AnimatedOnScrollButNotOnLoad from "./AnimatedOnScrollButNotOnLoad";
import "../components-css/Form.css";

const varela = Varela_Round({ subsets: ["latin"], weight: "400" });

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [buttonText, setButtonText] = useState("שליחה");

  interface ValidationResult {
    success: boolean;
  }

  const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log('event: ', event)
    event.preventDefault();
    if (event.currentTarget.id === "name") {
      if (event.currentTarget.validity.valueMissing) {
        setNameError("נא למלא את שדה השם.");
      }
    } else if (event.currentTarget.id === "phone") {
      if (event.currentTarget.validity.valueMissing) {
        setPhoneError("נא למלא את שדה הטלפון.");
      }
    }
  };

  const checkData = (name: any, phone: any): ValidationResult => {
    const nameRegex = /^[a-zA-Z\u0590-\u05FF\s]+$/;
    const phoneRegex = /^\d{9,10}$/;

    let nameError: string | undefined;
    let phoneError: string | undefined;

    if (!nameRegex.test(name)) {
      nameError = "Name must contain only letters and spaces.";
      setNameError("שם חייב לכלול אותיות ורווחים בלבד");
    } else {
      setNameError("");
    }

    if (!phoneRegex.test(phone)) {
      phoneError =
        "Phone number must contain only numbers and be 9 or 10 digits long.";
      setPhoneError("מספר חייב לכלול 9/10 ספרות בלבד");
    } else {
      setPhoneError("");
    }

    if (nameError || phoneError) {
      return {
        success: false,
      };
    } else {
      return {
        success: true,
      };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "name") {
      setNameError("");
    } else if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // בדיקה אם אושר
    const approveChecked = (
      document.getElementById("approve") as HTMLInputElement
    )?.checked;
    if (!approveChecked) {
      alert("יש לאשר את מדיניות הפרטיות לפני השליחה.");
      return;
    } else {
      // alert('???')
    }

    const validation = checkData(formData.name, formData.phone);
    if (!validation.success) {
      return;
    }

    console.log("Form submitted with:", formData);

    // const result = await fetch("https://8b9de3728139.ngrok-free.app/submit-details", {
    const result = await fetch("https://talmoshelasaservice4.runmydocker-app.com/send-mail", {
        // const result = await fetch("http://localhost:3001/send-mail", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("result, ", result);

    if (result.ok) {
      setButtonText("הפרטים נשלחו ונחזור אליך בהקדם!");
    } else {
      setButtonText("שגיאה בשליחת הפרטים");
    }
  };

  return (
    <>
      {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}>  */}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "20rem",
          // margin: '10.5em auto',
          margin: "auto",
          height: "fit-content",
          boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
          direction: "rtl",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          textAlign: "center",
        }}
        className={` form ${varela.className}`}
        data-aos="fade-up"
        id="contact-form"
      >
        <h2
          className={`${varela.className} contact-h2`}
          style={{
            // fontSize: "2rem",
            marginTop: "0",
            marginBottom: "1em",
            textAlign: "center",
            // position: "absolute",
            color: "white",
          }}
        >
          השאר פרטים ונחזור אליך!
        </h2>
        <label
          htmlFor="name"
          style={{
            display: "block",
            marginBottom: "0.5em",
            color: "white",
          }}
        >
          שם מלא
        </label>
        {nameError && (
          <p
            style={{
              marginBottom: "0.75rem",
              fontSize: "1rem",
              color: "red",
              backgroundColor: "white",
            }}
          >
            {nameError}
          </p>
        )}
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onInvalid={handleInvalid} // הוספנו כאן את ה-handler החדש
          style={{
            width: "100%",
            padding: "0.75em",
            marginBottom: "1.25em",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
            textAlign: "center",
          }}
          required
        />

        <label
          htmlFor="phone"
          style={{
            display: "block",
            marginBottom: "0.5em",
            color: "white",
          }}
        >
          מספר טלפון
        </label>
        {phoneError && (
          <p
            style={{
              marginBottom: "0.75rem",
              fontSize: "1rem",
              color: "red",
              backgroundColor: "white",
            }}
          >
            {phoneError}
          </p>
        )}
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onInvalid={handleInvalid} // הוספנו כאן את ה-handler החדש
          style={{
            width: "100%",
            padding: "0.75em",
            marginBottom: "2em",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
            textAlign: "center",
          }}
          required
        />

        <div style={{ marginBottom: "1em", textAlign: "right" }}>
          <input
            type="checkbox"
            id="approve"
            name="approve"
            required
            aria-required="true"
            style={{ marginLeft: "0.5em" }}
          />
          <label
            htmlFor="approve"
            style={{ color: "white", fontSize: "1rem", cursor: "pointer" }}
          >
            אני מאשר כי קראתי את תנאי השימוש ומדיניות הפרטים. אני מסכים שבעל
            העסק טל יצור איתי קשר לאחר שליחת הפרטים
          </label>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.875em",
            backgroundColor: "rgb(240, 240, 240)",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.5s ease",
            color: "black",
            fontWeight: "700",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(240, 240, 240, 0.8)	")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(240, 240, 240)	")
          }
        >
          {buttonText}
        </button>
      </form>
      {/* </AnimatedOnScrollButNotOnLoad> */}
    </>
  );
};

export default Form;
