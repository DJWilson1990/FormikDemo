"use client";

import { SaveForm } from "@/utils/actions";
import { useState } from "react";

// Set state for form fields
export default function FormReact({ initialValues }) {
  const [formData, setFormData] = useState({
    first_name: initialValues.firstName,
    last_name: initialValues.lastName,
    email: initialValues.email,
  });
  //   set state for form errors
  const [emailError, setEmailError] = useState("");
  //   validate form function
  function validateForm() {
    if (formData.email.length === 0) {
      setEmailError("Required");
      return false;
    } else {
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
      ) {
        setEmailError("Invalid email address");
        return false;
      }
    }
    setEmailError("");
    return true;
  }
  // handle form submit
  async function handleSubmit(event) {
    event.preventDefault();
    const formValid = validateForm();
    //if no errors. submit form
    if (formValid === true) {
      await SaveForm(formData);
      alert(JSON.stringify(formData, null, 20));
    }
  }
  //   handle change
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    validateForm();
  }
  return (
    <form className="flex flex-col w-96 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="first_name" className="text-center">
        First name
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        className="border my-4"
      />

      <label htmlFor="last_name" className="text-center">
        Last name
      </label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        value={formData.last_name}
        onChange={handleChange}
        className="border my-4"
      />

      <label htmlFor="email" className="text-center">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="border my-4"
      />
      {emailError.length !== 0 ? (
        <span className="error">{emailError}</span>
      ) : (
        <></>
      )}

      <button type="submit" className="border">
        Submit
      </button>
    </form>
  );
}
