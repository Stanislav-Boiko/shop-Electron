import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import "./CheckoutForm.scss";

const nameRegExp = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\- ]+$/;

const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(nameRegExp, "* Only letters allowed")
    .required("* Required"),
  lastName: Yup.string()
    .matches(nameRegExp, "* Only letters allowed")
    .required("* Required"),
  age: Yup.number()
    .typeError("* Must be a number")
    .min(1, "* Too young")
    .max(120, "* Too old")
    .required("* Required"),
  address: Yup.string().required("* Required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "* Invalid phone number")
    .required("* Required"),
});

function CheckoutForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        phone: "",
      }}
      validationSchema={CheckoutSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="checkout-form">
          <div>
            <label>First Name</label>
            <Field name="firstName" placeholder="Enter your first name" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" placeholder="Enter your last name" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div>
            <label>Age</label>
            <Field name="age" type="number" placeholder="Enter your age" />
            <ErrorMessage name="age" component="div" className="error" />
          </div>
          <div>
            <label>Address</label>
            <Field name="address" placeholder="Enter your address" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <div>
            <label>Phone</label>
            <Field name="phone" placeholder="Enter your phone number" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <Button type="submit" classNames="violet-btn" disabled={isSubmitting}>
            Checkout
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutForm;