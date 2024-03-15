"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SaveForm } from "@/utils/actions";
import "../globals.css";

// const Basic = ({ firstName, lastName, email }) => (
const Basic = ({ initialValues }) => (
  <div>
    <Formik
      // setting form values (set state)
      initialValues={{
        first_name: initialValues.firstName,
        last_name: initialValues.lastName,
        email: initialValues.email,
      }}
      // validate form field - email required
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      // handle submit
      onSubmit={async (values, { setSubmitting }) => {
        await SaveForm(values);
        alert(JSON.stringify(values, null, 20));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col w-96 mx-auto">
          <label htmlFor="first_name" className="text-center">
            First name
          </label>
          <Field type="text" name="first_name" className="border my-4" />

          <label htmlFor="last_name" className="text-center">
            Last name
          </label>
          <Field type="text" name="last_name" className="border my-4" />

          <label htmlFor="email" className="text-center">
            Email
          </label>
          <Field type="email" name="email" className="border my-4" />
          <ErrorMessage name="email" component="div" className="error" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="border text-black hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

// sits in line 31 above alert(JSON)
// setTimeout(() => {
//   SaveForm(values);
//   alert(JSON.stringify(values, null, 20));
//   setSubmitting(false);
// }, 400);
